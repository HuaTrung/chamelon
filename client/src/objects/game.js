
import {IO} from './io'

function generateCode(len) {
    let code = "";

    const charset = "abcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < len; i++) {
        code += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return code.toUpperCase();
}
var io = null
var games = null
var uuid =null
var topics =null
export class Game {
    constructor(voteTime, turnTime, topicSelected,db) {
        this.code = generateCode(4);
        this.players = [];
        this.chat = [];
        this.turn = 0;
        this.status = 'lobby';
        this.events = []
        this.io = new IO(db)
        this.voteTime = voteTime || 30;
        this.turnTime = turnTime || 30;
        this.topicSelected = topicSelected || 'random';
    }

    shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Join a player to this game
    playerJoin(player) {
        this.players.push(player);
        //update lobby with player names
        this.io.to(this.code).emit('update players', player.toJSON());
    };

    toJSON() {
        var jsonedObject = {};
        for (var x in this) {

            if (x === "toJSON" || x === "constructor" || x==="io") {
                continue;
            }
            jsonedObject[x] = this[x];
        }
        return jsonedObject;
    }

    playerLeave(player) {
        this.players.splice(this.players.indexOf(player), 1);
        this.io.to(this.code).emit('update players', this.players.map(player => player.name));

        //If there are no players left in the game, delete it.
        if(player.isHost) {
            games.splice(games.indexOf(this), 1)
            this.io.to(this.code).emit('leave game', 'The host disbanded the game.');
        }
    };

    getPlayer(socket) {
        for(let i = 0; i < this.players.length; i++) {
            if(this.players[i].socket === socket) {
                return this.players[i];
            }
        }
    }

    getPlayerById(id) {
        for(let i = 0; i < this.players.length; i++) {
            if(this.players[i].id === id) {
                return this.players[i];
            }
        }
    }

    startRound(topic='') {
        console.log('Round starting.');
        this.players.forEach(player => {
            player.isChameleon = false;
            player.wordGiven = '';
            player.votedFor = '';
        });
        this.status = 'inProgess';
        this.turn = 0;
        this.chameleon = this.players[Math.floor(Math.random() * this.players.length)];

        // Select topic with topic name, or random if topic = "random" || falsy
        if(!topic) {
            console.log('No topic passed, must be a fresh game.')
            console.log('Topic selected: ', this.topicSelected);
            if(!this.topicSelected || this.topicSelected.toLowerCase() === 'random') {
                console.log('Random topic');
                this.topic = topics[Math.floor(Math.random() * topics.length)];
            } else {
                console.log('Non-random topic');
                this.topic = topics.filter(topic => topic.topic === this.topicSelected);
                this.topic = this.topic[0];
            }
        } else {
            console.log('Topic passed, must be a new game from results screen')
            this.topic = topics.filter(topicObj => topicObj.topic === topic);
            this.topic = this.topic[0];
        }

        console.log('Selected Topic: ', this.topicSelected, 'Actual Topic: ', this.topic)


        this.secretWord = this.topic.words[Math.floor(Math.random() * this.topic.words.length)];
        //join chameleon to room-chameleon
        //join others to room-players
        this.players.forEach(player => {
            if(player === this.chameleon) {
                console.log(player.name + ' is the chameleon.');
                player.socket.join(`${this.code}-chameleon`);
            } else {
                console.log(player.name + ' is a player.');
                player.socket.join(`${this.code}-players`);
            }
        });

        this.shuffle(this.players);

        this.io.to(`${this.code}-chameleon`).emit('game started', {topic: this.topic, playerType: 'chameleon'});
        this.io.to(`${this.code}-chameleon`).emit('chameleon');
        this.io.to(`${this.code}-players`).emit('game started', {topic: this.topic, playerType: 'player', secretWord: this.secretWord});
        this.playerTurn(this.players[this.turn]);
    };

    startTimer(seconds, player) {

        this.io.to(this.code).emit('update timer', seconds)
        let countDown = () => {
            this.io.to(this.code).emit('update timer', seconds)
            seconds--;
            if(seconds < 0) {
                this.io.to(this.code).emit('receive message', {author: 'System', content: `${player.name} failed to give a clue in time.`});
                clearInterval(this.timerInterval);
                this.endTurn(player);
            }
        };
        
        this.timerInterval = setInterval(countDown, 1000)
    }

    playerTurn(player) {
        console.log(player.name + "'s turn");
        this.io.to(this.code).emit('receive message', {author: 'System', content: `It is ${player.name}'s turn.`});
        this.io.to(player.socketId).emit('my turn');
        this.io.to(this.code).emit('current turn', player.name);
        this.startTimer(this.turnTime, player);
    };

    endTurn() {
        console.log('Turn ended!');
        clearInterval(this.timerInterval);
        if(this.turn === this.players.length - 1) {
            this.io.to(this.players[this.turn].socketId).emit('turn over');
            console.log('turns are over!');
            this.startVote();
        } else {
            this.io.to(this.players[this.turn].socketId).emit('turn over');
            this.turn++;
            this.playerTurn(this.players[this.turn]);
        }
    }

    startVote() {
        let seconds = this.voteTime;
        const answers = this.players.map(player => {
            return {id: player.id, name: player.name, answer: player.submittedWord}
        });
        console.log(answers);
        this.io.to(this.code).emit('start vote', answers);
        this.io.to(this.code).emit('update timer', seconds);
        let countDown = () => {
            this.io.to(this.code).emit('update timer', seconds);
            seconds--;
            if(seconds < 0) {
                this.io.to(this.code).emit('vote over');
                clearInterval(this.timerInterval);
                this.evaluateVotes();
            }
        }

        this.timerInterval = setInterval(countDown, 1000);
    }

    tieBreaker(ids) {
        let seconds = 15;
        const answers = this.players.filter(player => {
            for(let i = 0; i < ids.length; i++) {
                if(player.id === ids[i]) {
                    return player;
                }
            }
        }).map(player => {
            return {id: player.id, name: player.name, answer: player.submittedWord}
        });
        console.log(answers);
        this.io.to(this.code).emit('tie breaker');
        this.io.to(this.code).emit('start vote', answers);
        this.io.to(this.code).emit('update timer', seconds);
        let countDown = () => {
            this.io.to(this.code).emit('update timer', seconds);
            seconds--;
            if(seconds < 0) {
                this.io.to(this.code).emit('vote over');
                clearInterval(this.timerInterval);
                this.evaluateVotes();
            }
        }
        this.timerInterval = setInterval(countDown, 1000);
    }

    evaluateVotes() {
        const votes = [];
        const counts = {};
        
        //Gather our votes
        this.players.forEach(player => {
            if(player.votedFor != '') {
                votes.push({playerName: player.name, vote: player.votedFor});
            }
        });

        // Gather our vote count
        for(let i = 0; i < votes.length; i++) {
            counts[votes[i].vote] = 1 + (counts[votes[i].vote] || 0);
        };

        console.log('Votes: ', votes);
        console.log('Counts: ', counts);
         
        //tally up and return the winner
        const getMax = object => {
            return Object.keys(object).filter(x => {
                 return object[x] == Math.max.apply(null, 
                 Object.values(object));
           });
        };

        let winner = getMax(counts);
        console.log('winner: ', winner[0]);

        if(winner.length === 1) {
            //If we have a clear winner, we're good to go!
            let winningPlayer = this.getPlayerById(winner[0]);
            this.io.to(this.code).emit('results', {winningPlayer: winningPlayer.name, chameleon: this.chameleon.name});
            this.players.forEach(player => {
                player.socket.leave(`${this.code}-chameleon`);
                player.socket.leave(`${this.code}-players`);
            })
        } else if (winner.length < 1) {
            //If we have no votes, start the vote process over
            this.startVote();
        } else {
            //If we have a tie, initiatie a tie breaker.

            //Reset the votes
            // this.players.forEach(player => {
            //     player.votedFor = '';
            // });
            this.io.to(this.code).emit('tie');
            this.tieBreaker(winner);
        }


    }
}