export class Player {
    constructor(name,player_id) {
        this.player_id=player_id
        this.name = name;
        this.isHost = false;
        this.points = 0;
        this.isChameleon = false;
        this.submittedWord = '';
        this.votedFor = '';
        this.room="";
        this.event={
            name:"",
            data:""
        };
    }

    vote(player) {
        this.votedFor = player;
    };

    submitWord(word) {
        this.submittedWord = word;
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
}
