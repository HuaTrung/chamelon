(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t){t.topics=[{topic:"Countries",language:"english",words:["UK","France","Germany","Canada","Spain","USA","Mexico","China","Japan","Italy","India","Russia","Brazil","Australia","Israel","Egypt"]},{topic:"Movies",language:"english",words:["Jurassic Park","Transformers","E.T.","Shrek","Jaws","Toy Story","The Wizard of Oz","The Godfather","Raiders of the Lost Ark","Home Alone","King Kong","Finding Nemo","The Avengers","Titanic","The Matrix","Avatar"]},{topic:"Inventions",language:"english",words:["Matches","Computer","TV","Car","Gunpowder","Internet","Electricity","Telephone","Wheel","Compass","Writing","Camera","Printing","Plane","Steam Engine","Radio"]},{topic:"Hobbies",language:"english",words:["Stamps","Fishing","Sailing","Cooking","Trains","Reading","Travel","Yoga","Model Making","Painting","Walking","Photography","Knitting","Gardening","Pottery","Hiking"]},{topic:"Musicals",language:"english",words:["West Side Story","Phantom of the Opera","Chicago","Lion King","Cats","Les Mis\xe9rables","42nd Street","Wicked","Jersey Boys","Oliver","Annie","Hairspray","School of Rock","Hamilton","Book of Mormon","Mamma Mia"]},{topic:"Sports",language:"english",words:["Football","Basketball","Tennis","Poker","Soccer","Ice Hockey","Badminton","Volleyball","Golf","Sailing","Motor Racing","Table Tennis","Baseball","Chess","Wrestling","Cycling"]},{topic:"The Arts",language:"english",words:["Painting","Sculpture","Architecture","Dance","Literature","Opera","Stand-up","Comic Books","Illustration","Music","Theatre","Cinema","Video Games","Graffiti","Fashion","Photography"]},{topic:"Under the Sea",language:"english",words:["Octopus","Lobster","Crab","Sea Turtle","Starfish","Seal","Giant Squid","Clownfish","Shark","Dolphin","Seahorse","Swordfish","Jellyfish","Killer Whale","Stingray","Mermaid"]},{topic:"Rooms",language:"english",words:["Kitchen","Bathroom","Attic","Den","Hallway","Dining Room","Basement","Bunker","Greenhouse","Office","Porch","Shed","Bedroom","Living Room","Nursery","Garage"]},{topic:"Phobias",language:"english",words:["Ghosts","Toilets","Needles","Children","Spiders","Snakes","Dogs","Shadows","Monsters","Germs","Birds","Roller Coasters","Rats","Clowns","Insects","Planes"]},{topic:"Drinks",language:"english",words:["Coffee","Wine","Hot Chocolate","Smoothie","Tea","Beer","Milkshake","Orange Juice","Lemonade","Punch","Root Beer","Milk","Coca-Cola","Tequila","Water","Champagne"]},{topic:"Geography",language:"english",words:["Lake","River","Jungle","Volcano","Sea","Desert","Island","Cave","Valley","Ocean","Glacier","Arctic","Mountain","Forest","Waterfall","Swamp"]},{topic:"Film Genres",language:"english",words:["Horror","Rom-Com","Gangster","Musical","Action","Western","Foreign Language","Animation","Thriller","Comedy","War","Zombie","Sci-Fi","Christmas","Documentary","Sport"]},{topic:"Jobs",language:"english",words:["Fisherman","Janitor","Truck Driver","Police Officer","Lumberjack","Secretary","Security Guard","Lawyer","Nurse","Accountant","Chef","Carpenter","Waiter","Teacher","Architect","Butcher"]},{topic:"Food",language:"english",words:["Pizza","Pasta","Eggs","Sausage","Potatoes","Salad","Cheese","Ice Cream","Fish","Soup","Fruit","Chocolate","Cake","Bread","Chicken","Beef"]},{topic:"School",language:"english",words:["Math","History","Economics","Gym","Chemistry","Philosophy","Spanish","Latin","Physics","Geography","Art","Religion","Biology","English","Music","Technology"]},{topic:"Zoo",language:"english",words:["Scorpion","Ostrich","Lion","Elephant","Giraffe","Leopard","Owl","Alligator","Koala","Meerkat","Eagle","Zebra","Tiger","Buffalo","Parrot","Gorilla"]}]},27:function(e,t,a){},31:function(e,t,a){e.exports=a(44)},36:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(3),s=a.n(n),r=a(29),o=a.n(r),i=(a(36),a(0)),c=a.n(i),l=a(4),h=a(14),m=a(1),u=a(2),p=a(8),d=a(6),g=a(7),f=(a(38),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).joinGame=function(){a.props.renderPage("join")},a.newGame=function(){a.props.renderPage("create")},a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"main-container --splash"},s.a.createElement("div",{className:"brand"},s.a.createElement("h1",null,"Chameleon")),s.a.createElement("div",{className:"button-group"},s.a.createElement("div",null,s.a.createElement("label",null,"Name: ",this.props.name," ")),s.a.createElement("button",{className:"button--default",onClick:this.joinGame},"Join Game"),s.a.createElement("button",{className:"button--default",onClick:this.newGame},"New Game"))))}}]),t}(n.Component)),v=(a(27),a(11)),y=function(){function e(t){Object(m.a)(this,e),this.db=t,this.doc=null}return Object(u.a)(e,[{key:"to",value:function(e){return this.doc=e,this}},{key:"emit",value:function(){var e=Object(l.a)(c.a.mark(function e(t,a,n){var s;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:s=Object(v.a)(this.db,this.doc,n),Object(v.e)(s,{events:{name:t,data:a,time:Object(v.d)()}},{merge:!0});case 2:case"end":return e.stop()}},e,this)}));return function(t,a,n){return e.apply(this,arguments)}}()}]),e}(),b=a(23);var k=function(){function e(t,a){Object(m.a)(this,e),this.name=t,this.code=function(e){for(var t="",a="abcdefghijklmnopqrstuvwxyz",n=0;n<e;n++)t+=a.charAt(Math.floor(Math.random()*a.length));return t.toUpperCase()}(4),this.players=[],this.chat=[],this.turn=0,this.status="lobby",this.events={name:"",data:"",time:""},this.io=new y(a)}return Object(u.a)(e,[{key:"shuffle",value:function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}}},{key:"playerJoin",value:function(e){this.players.push({name:e.name,id:e.player_id})}},{key:"toJSON",value:function(){var e={};for(var t in this)"toJSON"!==t&&"constructor"!==t&&"io"!==t&&(e[t]=this[t]);return e}},{key:"playerLeave",value:function(e){this.players.splice(this.players.indexOf(e),1),this.io.to(this.code).emit("update players",this.players.map(function(e){return e.name})),e.isHost&&(null.splice(null.indexOf(this),1),this.io.to(this.code).emit("leave game","The host disbanded the game."))}},{key:"getPlayer",value:function(e){for(var t=0;t<this.players.length;t++)if(this.players[t].socket===e)return this.players[t]}},{key:"getPlayerById",value:function(e){for(var t=0;t<this.players.length;t++)if(this.players[t].id===e)return this.players[t]}},{key:"startRound",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";console.log("Round starting."),this.players.forEach(function(e){e.isChameleon=!1,e.wordGiven="",e.votedFor=""}),this.status="inProgess",this.turn=0,this.chameleon=this.players[Math.floor(Math.random()*this.players.length)],t?(console.log("Topic passed, must be a new game from results screen"),this.topic=b.topics.filter(function(e){return e.topic===t}),this.topic=this.topic[0]):(console.log("No topic passed, must be a fresh game."),console.log("Topic selected: ",this.topicSelected),this.topicSelected&&"random"!==this.topicSelected.toLowerCase()?(console.log("Non-random topic"),this.topic=b.topics.filter(function(t){return t.topic===e.topicSelected}),this.topic=this.topic[0]):(console.log("Random topic"),this.topic=b.topics[Math.floor(Math.random()*b.topics.length)])),console.log("Selected Topic: ",this.topicSelected,"Actual Topic: ",this.topic),this.secretWord=this.topic.words[Math.floor(Math.random()*this.topic.words.length)],this.players.forEach(function(t){t===e.chameleon?(console.log(t.name+" is the chameleon."),e.io.to("rooms").emit("chameleon",t.name,e.code)):console.log(t.name+" is a player.")}),this.shuffle(this.players),this.io.to("rooms").emit("game_started",{topic:this.topic,playerType:"chameleon",secretWord:this.secretWord},this.code),this.playerTurn(this.players[this.turn])}},{key:"playerTurn",value:function(e){console.log(e.name+"'s turn")}},{key:"endTurn",value:function(){console.log("Turn ended!"),clearInterval(this.timerInterval),this.turn===this.players.length-1?(this.io.to(this.players[this.turn].socketId).emit("turn over"),console.log("turns are over!"),this.startVote()):(this.io.to(this.players[this.turn].socketId).emit("turn over"),this.turn++,this.playerTurn(this.players[this.turn]))}},{key:"startVote",value:function(){var e=this,t=this.voteTime,a=this.players.map(function(e){return{id:e.id,name:e.name,answer:e.submittedWord}});console.log(a),this.io.to(this.code).emit("start vote",a),this.io.to(this.code).emit("update timer",t);this.timerInterval=setInterval(function(){e.io.to(e.code).emit("update timer",t),--t<0&&(e.io.to(e.code).emit("vote over"),clearInterval(e.timerInterval),e.evaluateVotes())},1e3)}},{key:"tieBreaker",value:function(e){var t=this,a=15,n=this.players.filter(function(t){for(var a=0;a<e.length;a++)if(t.id===e[a])return t}).map(function(e){return{id:e.id,name:e.name,answer:e.submittedWord}});console.log(n),this.io.to(this.code).emit("tie breaker"),this.io.to(this.code).emit("start vote",n),this.io.to(this.code).emit("update timer",a);this.timerInterval=setInterval(function(){t.io.to(t.code).emit("update timer",a),--a<0&&(t.io.to(t.code).emit("vote over"),clearInterval(t.timerInterval),t.evaluateVotes())},1e3)}},{key:"evaluateVotes",value:function(){var e=this,t=[],a={};this.players.forEach(function(e){""!=e.votedFor&&t.push({playerName:e.name,vote:e.votedFor})});for(var n=0;n<t.length;n++)a[t[n].vote]=1+(a[t[n].vote]||0);console.log("Votes: ",t),console.log("Counts: ",a);var s,r=(s=a,Object.keys(s).filter(function(e){return s[e]==Math.max.apply(null,Object.values(s))}));if(console.log("winner: ",r[0]),1===r.length){var o=this.getPlayerById(r[0]);this.io.to(this.code).emit("results",{winningPlayer:o.name,chameleon:this.chameleon.name}),this.players.forEach(function(t){t.socket.leave("".concat(e.code,"-chameleon")),t.socket.leave("".concat(e.code,"-players"))})}else r.length<1?this.startVote():(this.io.to(this.code).emit("tie"),this.tieBreaker(r))}}]),e}(),E=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).back=function(){a.props.renderPage("splash")},a.createGame=function(){var e=Object(l.a)(c.a.mark(function e(t){var n,s,r,o;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""===a.state.name){e.next=12;break}return n=new k(a.state.name,a.props.db),s=a.props.db,n.playerJoin(a.props.player),r=n.toJSON(),e.next=8,Object(v.e)(Object(v.a)(s,"rooms",n.code),r);case 8:o=Object(v.a)(s,"players_online",a.props.player.player_id),Object(v.e)(o,{isHost:!0,room:n.code},{merge:!0}),a.props.notify_player("new_game",{code:n.code,playerId:a.props.player.player_id}),a.props.renderPage("lobby");case 12:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.changeName=function(e){a.setState({name:e.target.value})},a.changeTopic=function(e){a.setState({topic:e.target.value})},a.changeTurnTimer=function(e){a.setState({turnTime:e.target.value})},a.changeVotingTime=function(e){a.setState({voteTime:e.target.value})},a.state={name:"",topic:"",turnTime:30,voteTime:30,topics:[]},a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"main-container --create"},s.a.createElement("div",{className:"back",onClick:this.back}),s.a.createElement("div",{className:"title"},s.a.createElement("h2",null,"Create a Game")),s.a.createElement("form",{className:"form-group"},s.a.createElement("div",{className:"max-sm"},s.a.createElement("div",null,s.a.createElement("label",null,"Name"),s.a.createElement("input",{value:this.state.name,onChange:this.changeName})),s.a.createElement("div",null,s.a.createElement("label",null,"Topic"),s.a.createElement("select",{onChange:this.changeTopic},this.state.topics.map(function(e){return s.a.createElement("option",{value:e,key:e},e)}))),s.a.createElement("div",null,s.a.createElement("label",null,"Turn Timer (seconds)"),s.a.createElement("input",{value:this.state.turnTime,type:"number",onChange:this.changeTurnTimer})),s.a.createElement("div",null,s.a.createElement("label",null,"Voting Time (seconds)"),s.a.createElement("input",{value:this.state.voteTime,type:"number",onChange:this.changeVotingTime})),s.a.createElement("button",{className:"button--default",onClick:this.createGame,type:"submit"},"Create Game")))))}},{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark(function e(){var t,a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/topics");case 2:return t=e.sent,e.next=5,t.json();case 5:(a=e.sent).sort(),a.unshift("Random"),this.setState({topics:a});case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),t}(n.Component),_=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).back=function(){a.props.renderPage("splash")},a.join=function(){var e=Object(l.a)(c.a.mark(function e(t){var n,s,r,o,i,l;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.props.db,s=Object(v.a)(n,"rooms",a.code.current.value),e.next=5,Object(v.b)(s);case 5:if(!(r=e.sent).exists()){e.next=20;break}return a.props.setCode(r.data().code),a.props.player.room=r.data().code,o=Object(v.a)(n,"players_online",a.props.player.player_id),Object(v.e)(o,{isHost:!1,room:r.data().code},{merge:!0}),(i=Object.assign(new k,r.data())).playerJoin(a.props.player),l=i.toJSON(),e.next=16,Object(v.e)(Object(v.a)(n,"rooms",i.code),l,{merge:!0});case 16:a.props.notify_player("game_joined",{player_id:a.props.player.player_id,code:i.code}),a.props.renderPage("lobby"),e.next=21;break;case 20:a.props.setMessage("Invalid");case 21:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.forceUpper=function(){a.code.current.value=a.code.current.value.toUpperCase()},a.name=s.a.createRef(),a.code=s.a.createRef(),a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"main-container --join"},s.a.createElement("div",{className:"back",onClick:this.back}),s.a.createElement("div",{className:"title"},s.a.createElement("h2",null,"Join a Game")),s.a.createElement("form",{className:"form-group"},s.a.createElement("label",null,"Game Code"),s.a.createElement("input",{maxLength:"4",ref:this.code,onChange:this.forceUpper}),s.a.createElement("button",{className:"button--default",onClick:this.join,type:"submit"},"Join Game"))))}}]),t}(n.Component),w=(a(39),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).back=function(){a.props.leaveGame(a.props.socket)},a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"main-container --lobby"},s.a.createElement("div",{className:"back",onClick:this.back}),s.a.createElement("div",{className:"title"},s.a.createElement("h2",null,"Game Code:"),s.a.createElement("h1",null,this.props.code_game)),s.a.createElement("p",{className:"lobby__info"},"Do not lock your device, or you will be disconnected."),s.a.createElement("p",{className:"lobby__info"},"You need at least 3 players to play."),s.a.createElement("div",{className:"lobby__players"},s.a.createElement("h2",null,"".concat(this.props.players.length," of 8 players.")),this.props.players.map(function(e){return s.a.createElement("h2",{key:e.id},e)})),this.props.isHost&&s.a.createElement("div",{className:"button-group"},s.a.createElement("button",{className:"button--default",onClick:this.props.startGame},"Start Game"))))}}]),t}(n.Component)),C=(a(40),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).sendMessage=function(e){e.preventDefault(),a.props.socket.emit("receive message",{code:a.props.code,content:a.messageContent.current.value}),a.messageContent.current.value=""},a.scrollToBottom=function(){a.chatEnd.scrollIntoView({behavior:"smooth"})},a.messageContent=s.a.createRef(),a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(e){e.messages!==this.props.messages&&this.scrollToBottom()}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"chat"},s.a.createElement("div",{className:"chat__messages"},this.props.messages.map(function(e){return s.a.createElement("div",{className:"chat__message"},s.a.createElement("span",{className:"chat__message__author",style:"System"===e.author?{color:"red"}:{}},e.author),": ",e.content)}),s.a.createElement("div",{ref:function(t){e.chatEnd=t}})),s.a.createElement("form",{className:"chat__submit"},s.a.createElement("input",{className:"chat__submit__input",placeholder:"Start typing...",ref:this.messageContent}),s.a.createElement("button",{className:"chat__submit__button",onClick:this.sendMessage,type:"submit"},"Send")))}}]),t}(n.Component)),O=(a(41),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).submitWord=function(e){e.preventDefault(),""!==a.clue.current.value&&a.props.socket.emit("word submitted",{code:a.props.code,word:a.clue.current.value})},a.clue=s.a.createRef(),a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("div",{className:"main-container --round"},s.a.createElement("div",{className:"round__topic"},s.a.createElement("div",{className:"round__topic__title"},this.props.topic.topic),this.props.topic.words.map(function(t){return e.props.secretWord===t?s.a.createElement("div",{className:"round__topic__word highlighted"},t):s.a.createElement("div",{className:"round__topic__word"},t)})),this.props.isChameleon&&s.a.createElement("div",null,s.a.createElement("h3",null,"You are the"),s.a.createElement("h2",null,"CHAMELEON")),!this.props.isChameleon&&s.a.createElement("div",null,s.a.createElement("h3",null,"The secret word is"),this.props.secretWord&&s.a.createElement("h2",null,this.props.secretWord.toUpperCase())),s.a.createElement("div",{className:"round__timer"},this.props.currentTurn," has ",this.props.timer," seconds to answer."),!0===this.props.isMyTurn&&s.a.createElement("form",{className:"form-group"},s.a.createElement("label",null,"Your clue:"),s.a.createElement("input",{maxLength:"36",ref:this.clue}),s.a.createElement("button",{className:"button--default",onClick:this.submitWord,type:"submit"},"Submit")),this.props.isHost&&s.a.createElement("button",{className:"button--default",onClick:this.props.reset,type:"submit"},"Reset Game"),s.a.createElement(C,{messages:this.props.messages,code:this.props.code,socket:this.props.socket})))}}]),t}(n.Component)),j=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).selectClue=function(){a.props.selectClue(a.props.id)},a.state={clueSelected:!1},a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(){0===this.props.timer&&console.log("Votes being sent in!")}},{key:"render",value:function(){return s.a.createElement("div",{className:this.props.selectedClue===this.props.id?"vote__info vote__info__selected":"vote__info",onClick:this.selectClue},s.a.createElement("span",{className:"vote__info__playername"},this.props.player.name),s.a.createElement("span",{className:"vote__info__playeranswer"},this.props.player.answer.length>0?this.props.player.answer:"N/A"))}}]),t}(n.Component),S=(a(42),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).toggleVote=function(){a.setState({showVote:!a.state.showVote})},a.selectClue=function(e){a.setState({selectedClue:e}),a.props.placeVote(e)},a.state={showVote:!0},a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"main-container --vote"},s.a.createElement("h2",null,"It's time to vote!"),this.props.tieBreaker&&s.a.createElement("h2",null,"TIE BREAKER!"),s.a.createElement("h2",null,this.props.timer),s.a.createElement("div",{className:"vote__container"},s.a.createElement("div",{className:this.state.showVote?"vote__info__container":"--hidden"},this.props.playerAnswers.map(function(t){return t.id!==e.props.playerId?s.a.createElement(j,{player:t,timer:e.props.timer,id:t.id,key:t.id,selectClue:e.selectClue,selectedClue:e.state.selectedClue}):s.a.createElement(s.a.Fragment,null)})),s.a.createElement("div",{className:this.state.showVote?"--hidden":"round__topic"},s.a.createElement("div",{className:"round__topic__title"},this.props.topic.topic),this.props.topic.words.map(function(t){return e.props.secretWord===t?s.a.createElement("div",{className:"round__topic__word highlighted"},t):s.a.createElement("div",{className:"round__topic__word"},t)})),s.a.createElement("div",{className:"vote__selection-box"},s.a.createElement("div",{className:this.state.showVote?"vote__selection--enabled":"vote__selection--disabled",onClick:this.toggleVote},"Clues"),s.a.createElement("div",{className:this.state.showVote?"vote__selection--disabled":"vote__selection--enabled",onClick:this.toggleVote},"Topic"))),s.a.createElement(C,{messages:this.props.messages,code:this.props.code,socket:this.props.socket}))}}]),t}(n.Component)),N=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={voteCorrect:!1,topics:[]},a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark(function e(){var t,a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.props.chameleon===this.props.winningPlayer&&this.setState({voteCorrect:!0}),e.next=3,fetch("/topics");case 3:return t=e.sent,e.next=6,t.json();case 6:(a=e.sent).sort(),a.unshift("Random"),this.setState({topics:a});case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return s.a.createElement("div",{className:"main-container --results"},!this.props.isChameleon&&s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",null,"The results are in!"),s.a.createElement("p",null,"You thought the chameleon was ",s.a.createElement("strong",null,this.props.winningPlayer),"."),s.a.createElement("p",null,"And the chameleon was actually..."),s.a.createElement("h1",null,this.props.chameleon)),this.props.isChameleon&&this.state.voteCorrect&&s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",null,"You've been found!"),s.a.createElement("p",null,"Do you know what the secret word was?")),this.props.isChameleon&&!this.state.voteCorrect&&s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",null,"You got away this time!")),this.props.isHost&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"results__form-group"},s.a.createElement("label",null,"Topic"),s.a.createElement("select",{onChange:this.props.changeTopic},this.state.topics.map(function(e){return s.a.createElement("option",{value:e,key:e},e)}))),s.a.createElement("div",{className:"button-group"},s.a.createElement("button",{className:"button--default",onClick:this.props.startGame},"New Game?"))),s.a.createElement(C,{messages:this.props.messages,code:this.props.code,socket:this.props.socket}))}}]),t}(n.Component),T=a(25),P=(a(45),function(){function e(t,a){Object(m.a)(this,e),this.player_id=a,this.name=t,this.isHost=!1,this.points=0,this.isChameleon=!1,this.submittedWord="",this.votedFor="",this.room="",this.event={name:"",data:""}}return Object(u.a)(e,[{key:"vote",value:function(e){this.votedFor=e}},{key:"submitWord",value:function(e){this.submittedWord=e}},{key:"toJSON",value:function(){var e={};for(var t in this)"toJSON"!==t&&"constructor"!==t&&"io"!==t&&(e[t]=this[t]);return e}}]),e}()),G=(a(43),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).joinGame=function(){a.props.login(),a.props.renderPage("splash")},a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"main-container --splash"},s.a.createElement("div",{className:"brand"},s.a.createElement("h1",null,"Chameleon")),s.a.createElement("div",{className:"button-group"},s.a.createElement("div",null,s.a.createElement("label",null,"Name"),s.a.createElement("input",{onChange:this.props.changeName})),s.a.createElement("button",{className:"button--default",onClick:this.joinGame},"GO"))))}}]),t}(n.Component)),M=(T.a.initializeApp({apiKey:"AIzaSyCA7kl97Ip7NPUCQdtrb7HG_tYZiillaVg",authDomain:"airplane-shooting.firebaseapp.com",databaseURL:"https://airplane-shooting.firebaseio.com",projectId:"airplane-shooting",storageBucket:"airplane-shooting.appspot.com",messagingSenderId:"758825287318",appId:"1:758825287318:web:df02c234565efbdff00cb7"}),T.a.firestore());navigator.vibrate=navigator.vibrate||navigator.webkitVibrate||navigator.mozVibrate||navigator.msVibrate;function I(e){for(var t=e+"=",a=decodeURIComponent(document.cookie).split(";"),n=0;n<a.length;n++){for(var s=a[n];" "==s.charAt(0);)s=s.substring(1);if(0==s.indexOf(t))return s.substring(t.length,s.length)}return""}function x(e,t,a){var n=new Date;n.setTime(n.getTime()+24*a*60*60*1e3);var s="expires="+n.toUTCString();document.cookie=e+"="+t+";"+s+";path=/"}var A=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).createAlert=function(e){a.setState({messages:[].concat(Object(h.a)(a.state.messages),[{author:"System",content:e}])})},a.initSocket=function(){},a.login=Object(l.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=new P(a.state.playerName,a.state.playerId),e.next=3,Object(v.e)(Object(v.a)(M,"players_online",t.player_id),t.toJSON());case 3:a.state.io.to("players_online").emit("on_connect","",a.state.playerId),a.setState({player:t});case 5:case"end":return e.stop()}},e)})),a.setCode=function(e){a.setState({code_game:e})},a.setMessage=function(e){a.setState({message:e})},a.notify_player=function(e,t){a.state.io.to("players_online").emit(e,t,a.state.playerId)},a.leaveGame=function(e){e.emit("leave game"),a.setState({rendered:"askingname",isHost:!1,players:[],code_game:"",message:"",topic:{},timer:0,currentTurn:"",showAlert:!1,alert:"",messages:[],playerAnswers:[],playerId:"",vote:"",isChameleon:!1,tieBreaker:!1,selectedTopic:""})},a.renderPage=function(e){a.setState({rendered:e})},a.changeName=function(e){a.setState({playerName:e.target.value})},a.startGame=function(){a.state.players.length>1&&(console.log("Game starting."),a.state.game.startRound(""))},a.reset=function(){a.state.io.to("rooms").emit("new_game","",a.state.code_game)},a.placeVote=function(e){a.setState({vote:e}),a.state.socket.emit("place vote",{code_game:a.state.code,id:e})},a.changeTopic=function(e){a.setState({selectedTopic:e.target.value})},a.state={db:M,socket:null,id:"",rendered:"askingname",isHost:!1,playerName:null,players:[],code:"",message:"",topic:{},timer:0,currentTurn:"",showAlert:!1,alert:"",messages:[],playerAnswers:[],vote:"",isChameleon:!1,tieBreaker:!1,selectedTopic:null,io:new y(M),game:null},a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"listen_room",value:function(){var e=Object(l.a)(c.a.mark(function e(){var t,a,n,s=this;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(v.a)(M,"rooms",this.state.code_game),e.next=3,Object(v.b)(t);case 3:a=e.sent,(n=Object.assign(new k,a.data())).io.db=this.state.db,this.setState({game:n,players:n.players.map(function(e){return e.name})}),Object(v.c)(Object(v.a)(M,"rooms",this.state.code_game),function(e){console.log("Current data 2: ",e.data());var t=e.data().events;if(void 0!=t)switch(e.data().events.name){case"chameleon":if(t.data==s.state.player.name){var a=s.state.player;a.isChameleon=!0,s.setState({isChameleon:!0,player:a});var n=Object(v.a)(s.db,"players_online",s.state.player.playerId);Object(v.e)(n,{isChameleon:!0},{merge:!0})}break;case"start_vote":s.setState({playerAnswers:t.data,rendered:"vote"});break;case"answers_in":s.setState({playerAnswers:t.data});break;case"tie_breaker":s.setState({tieBreaker:!0});break;case"results":s.setState({chameleon:t.data.chameleon,winningPlayer:t.data.winningPlayer}),s.renderPage("results");break;case"new_game":s.renderPage("lobby");break;case"game_started":s.setState({message:"",timer:0,currentTurn:"",playerAnswers:[],vote:"",isChameleon:!1,tieBreaker:!1}),s.state.player.isChameleon?(s.setState({topic:t.data.topic}),s.renderPage("round")):(s.setState({topic:t.data.topic,secretWord:t.data.secretWord}),s.renderPage("round"))}});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark(function e(){var t,a,n,s,r,o,i,l=this;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=(t=I("id_chamelon")).length){e.next=7;break}x("id_chamelon",a=Math.floor(1e3*Math.random()),1),t=a,e.next=29;break;case 7:return n=Object(v.a)(M,"players_online",t),e.next=10,Object(v.b)(n);case 10:if(!(s=e.sent).exists()){e.next=28;break}if(console.log("Document data:",s.data()),r=s.data(),this.state.io.to("players_online").emit("on_connect","",t),Object(v.c)(Object(v.a)(M,"players_online",t),function(e){var t=e.data().events.data;switch(e.data().events.name){case"new_game":l.setState({code_game:t.code,isHost:!0}),l.listen_room();break;case"game_joined":l.setState({code_game:t.code,playerId:t.playerId}),l.listen_room()}}),this.setState({player:r,playerName:r.name}),!(this.state.player.room.length>0)){e.next=25;break}return o=Object(v.a)(M,"rooms",this.state.player.room),e.next=21,Object(v.b)(o);case 21:(i=e.sent).exists()&&(i.data(),this.setState({code_game:this.state.player.room,isHost:this.state.player.isHost}),this.listen_room(),this.renderPage("lobby")),e.next=26;break;case 25:this.renderPage("splash");case 26:e.next=29;break;case 28:console.log("No such document!");case 29:this.setState({playerId:t}),this.initSocket();case 31:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return s.a.createElement("div",{className:"container"},"askingname"===this.state.rendered&&s.a.createElement(G,{renderPage:this.renderPage,changeName:this.changeName,login:this.login}),"splash"===this.state.rendered&&s.a.createElement(f,{renderPage:this.renderPage,name:this.state.playerName}),"create"===this.state.rendered&&s.a.createElement(E,{renderPage:this.renderPage,db:this.state.db,setHost:this.setHost,player:this.state.player,notify_player:this.notify_player}),"join"===this.state.rendered&&s.a.createElement(_,{renderPage:this.renderPage,socket:this.state.socket,message:this.state.message,setMessage:this.setMessage,setCode:this.setCode,db:this.state.db,notify_player:this.notify_player,player:this.state.player}),"lobby"===this.state.rendered&&s.a.createElement(w,{renderPage:this.renderPage,socket:this.state.socket,isHost:this.state.isHost,code_game:this.state.code_game,players:this.state.players,leaveGame:this.leaveGame,startGame:this.startGame}),"round"===this.state.rendered&&s.a.createElement(O,{isChameleon:this.state.isChameleon,renderPage:this.renderPage,messages:this.state.messages,socket:this.state.socket,code_game:this.state.code_game,playerType:this.state.playerType,currentTurn:this.state.currentTurn,topic:this.state.topic,secretWord:this.state.secretWord,isMyTurn:this.state.isMyTurn,timer:this.state.timer,reset:this.reset,isHost:this.state.isHost}),"vote"===this.state.rendered&&s.a.createElement(S,{tieBreaker:this.state.tieBreaker,placeVote:this.placeVote,renderPage:this.renderPage,messages:this.state.messages,socket:this.state.socket,code_game:this.state.code_game,playerAnswers:this.state.playerAnswers,topic:this.state.topic,secretWord:this.state.secretWord,timer:this.state.timer,playerId:this.state.playerId}),"results"===this.state.rendered&&s.a.createElement(N,{messages:this.state.messages,socket:this.state.socket,isHost:this.state.isHost,code_game:this.state.code_game,chameleon:this.state.chameleon,startGame:this.startGame,winningPlayer:this.state.winningPlayer,isChameleon:this.state.isChameleon,topic:this.selectedTopic,changeTopic:this.changeTopic}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.352ca031.chunk.js.map