import React, { Component } from "react";
import io from "socket.io-client";

import Splash from "./components/Splash";
import CreateGame from "./components/CreateGame";
import JoinGame from "./components/JoinGame";
import Lobby from "./components/Lobby";
import Round from "./components/Round";
import Vote from "./components/Vote";
import Results from "./components/Results";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { doc, onSnapshot, setDoc,getDoc } from "firebase/firestore";
import { IO } from "./objects/io";
import {Player} from './objects/player'
import AskingName from "./components/AskingName";

// Initialize Firebase
// Copy the config from your own Firebase app
const firebaseConfig = {
  apiKey: "AIzaSyCA7kl97Ip7NPUCQdtrb7HG_tYZiillaVg",
  authDomain: "airplane-shooting.firebaseapp.com",
  databaseURL: "https://airplane-shooting.firebaseio.com",
  projectId: "airplane-shooting",
  storageBucket: "airplane-shooting.appspot.com",
  messagingSenderId: "758825287318",
  appId: "1:758825287318:web:df02c234565efbdff00cb7",
};

var app = firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

// enable vibration support
navigator.vibrate =
  navigator.vibrate ||
  navigator.webkitVibrate ||
  navigator.mozVibrate ||
  navigator.msVibrate;

const socketUrl =
  process.env.NODE_ENV !== "production"
    ? process.env.SOCKET_URL
    : "https://chameleon.jwayne.dev/";

    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      db: db,
      socket: null,
      id: "",
      rendered: "askingname",
      isHost: false,
      playerName: null,
      players: [],
      code: "",
      message: "",
      topic: {},
      timer: 0,
      currentTurn: "",
      showAlert: false,
      alert: "",
      messages: [],
      playerAnswers: [],
      vote: "",
      isChameleon: false,
      tieBreaker: false,
      selectedTopic: null,
      io: new IO()
    };
  }

  async componentDidMount() {
    let id_chamelon=getCookie("id_chamelon")
    if (id_chamelon.length==0){
        let new_id=Math.floor(Math.random() * 1000)
        setCookie("id_chamelon", new_id,1);
        id_chamelon=new_id
        this.setState({playerId: id_chamelon});
    } 
    else {
        const docRef = doc(db, "players_online", id_chamelon);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            let player = docSnap.data();
            this.setState({player:player, playerName:player.name,playerId: id_chamelon})
            this.renderPage('splash');
        } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        }

    }
    
    this.initSocket();
  }

  createAlert = (message) => {
    this.setState({
      messages: [
        ...this.state.messages,
        { author: "System", content: message },
      ],
    });
  };

  initSocket = () => {
    const unsub = onSnapshot(doc(db, "events", "SF"), (doc) => {
      console.log("Current data: ", doc.data());
      let event1 = doc.data();
      if(event1==undefined ){
        return
      }
      switch (event1.name) {
        // case "new game":
        //   this.setState({
        //     code: data.code,
        //     isHost: true,
        //     playerId: data.playerId,
        //   });
        //   break;
        // case "game joined":
        //   this.setState({ code: data.code, playerId: data.playerId });
        //   break;
        case "chameleon":
            this.setState({isChameleon: true});
            break;
        case "start vote":
            this.setState({playerAnswers: event1.data, rendered: 'vote'})
            break;
        case "answers in":
            this.setState({playerAnswers: event1.data})
            break;
        case "tie breaker":
            this.setState({tieBreaker: true});
            break;
        case "results":
            this.setState({chameleon: event1.data.chameleon, winningPlayer: event1.data.winningPlayer});
            this.renderPage('results');
            break;
        case "game started":
          this.setState({
            message: "",
            timer: 0,
            currentTurn: "",
            playerAnswers: [],
            vote: "",
            isChameleon: false,
            tieBreaker: false,
          });
          if (event1.data.playerType !== "chameleon") {
            this.setState({ topic: event1.data.topic, secretWord: event1.data.secretWord });
            this.renderPage("round");
          } else {
            this.setState({ topic: event1.data.topic });
            this.renderPage("round");
          }
          break;
        default:
        // code block
      }
    });

    // const socket = io(socketUrl);
    // socket.on('connect', () => {
    //     console.log('Connected to host.');
    // });

    // socket.on('new game', data => {
    //     this.setState({code: data.code, isHost: true, playerId: data.playerId});
    // });

    // socket.on('game joined', data => {
    //     this.setState({code: data.code, playerId: data.playerId });
    // });

    // socket.on('leave game', data => {
    //     this.setState({message: data.message || ''});
    //     this.leaveGame(socket);
    // });

    // socket.on("update players", (players) => {
    //     this.setState({players})
    // });

    // socket.on("update timer", timer => {
    //     this.setState({timer});
    // })

    // socket.on("error", message => {
    //     this.setState({message});
    // })

    // socket.on("game started", data => {
    //     this.setState({
    //         message: '',
    //         timer: 0,
    //         currentTurn: '',
    //         playerAnswers: [],
    //         vote: '',
    //         isChameleon: false,
    //         tieBreaker: false
    //     });
    //     if(data.playerType !== 'chameleon'){
    //         this.setState({topic: data.topic, secretWord: data.secretWord});
    //         this.renderPage('round');
    //     } else {
    //         this.setState({topic: data.topic});
    //         this.renderPage('round');
    //     }
    // });

    // socket.on("my turn", () => {
    //     this.setState({isMyTurn: true});
    //     if (navigator.vibrate) {
    //         navigator.vibrate(3000);
    //     }
    // });

    // socket.on("chameleon", () => {
    //     this.setState({isChameleon: true});
    // })

    // socket.on("turn over", () => {
    //     this.setState({isMyTurn: false});
    // });

    // socket.on("alert", data => {
    //     this.createAlert(data.message);
    // });

    // socket.on("current turn", playerName => {
    //     this.setState({currentTurn: playerName})
    // });

    // socket.on("receive message", data => {
    //     this.setState({messages: [ ...this.state.messages, {author: data.author, content: data.content }]})
    // });

    // socket.on("start vote", answers => {
    //     this.setState({playerAnswers: answers, rendered: 'vote'})
    // });

    // socket.on("answers in", data => {
    //     this.setState({playerAnswers: data})
    // });

    // socket.on("tie breaker", () => {
    //     this.setState({tieBreaker: true});
    // })

    // socket.on("results", data => {
    //     this.setState({chameleon: data.chameleon, winningPlayer: data.winningPlayer});
    //     this.renderPage('results');
    // })
  };
   login = async () => {
    let player = new Player(this.state.playerName,this.state.playerId);
    await setDoc(doc(db, "players_online", player.player_id),player.toJSON());
  };

  setCode = (code) => {
    this.setState({ code });
  };

  setMessage = (message) => {
    this.setState({ message });
  };

  leaveGame = (socket) => {
    socket.emit("leave game");
    this.setState({
      rendered: "askingname",
      isHost: false,
      players: [],
      code: "",
      message: "",
      topic: {},
      timer: 0,
      currentTurn: "",
      showAlert: false,
      alert: "",
      messages: [],
      playerAnswers: [],
      playerId: "",
      vote: "",
      isChameleon: false,
      tieBreaker: false,
      selectedTopic: "",
    });
  };

  renderPage = (page) => {
    this.setState({
      rendered: page,
    });
  };
  changeName = e => {
    this.setState({playerName: e.target.value});
}

  startGame = () => {
    if (this.state.players.length > 2) {
      this.state.socket.emit("start game", {
        code: this.state.code,
        topic: this.state.selectedTopic ? this.state.selectedTopic : null,
      });
    }
  };

  placeVote = (id) => {
    this.setState({ vote: id });
    this.state.socket.emit("place vote", { code: this.state.code, id });
  };

  changeTopic = (e) => {
    this.setState({ selectedTopic: e.target.value });
  };

  render() {
    return (
      <div className="container">
         {this.state.rendered === "askingname" && (
          <AskingName renderPage={this.renderPage} changeName={this.changeName} login={this.login} />
        )}
        {this.state.rendered === "splash" && (
          <Splash renderPage={this.renderPage} name={this.state.playerName} />
        )}
        {this.state.rendered === "create" && (
          <CreateGame
            renderPage={this.renderPage}
            db={this.state.db}
            setHost={this.setHost}
          />
        )}
        {this.state.rendered === "join" && (
          <JoinGame
            renderPage={this.renderPage}
            socket={this.state.socket}
            message={this.state.message}
            setMessage={this.setMessage}
            setCode={this.setCode}
          />
        )}
        {this.state.rendered === "lobby" && (
          <Lobby
            renderPage={this.renderPage}
            socket={this.state.socket}
            isHost={this.state.isHost}
            code={this.state.code}
            players={this.state.players}
            leaveGame={this.leaveGame}
            startGame={this.startGame}
          />
        )}
        {this.state.rendered === "round" && (
          <Round
            isChameleon={this.state.isChameleon}
            renderPage={this.renderPage}
            messages={this.state.messages}
            socket={this.state.socket}
            code={this.state.code}
            playerType={this.state.playerType}
            currentTurn={this.state.currentTurn}
            topic={this.state.topic}
            secretWord={this.state.secretWord}
            isMyTurn={this.state.isMyTurn}
            timer={this.state.timer}
          />
        )}
        {this.state.rendered === "vote" && (
          <Vote
            tieBreaker={this.state.tieBreaker}
            placeVote={this.placeVote}
            renderPage={this.renderPage}
            messages={this.state.messages}
            socket={this.state.socket}
            code={this.state.code}
            playerAnswers={this.state.playerAnswers}
            topic={this.state.topic}
            secretWord={this.state.secretWord}
            timer={this.state.timer}
            playerId={this.state.playerId}
          />
        )}
        {this.state.rendered === "results" && (
          <Results
            messages={this.state.messages}
            socket={this.state.socket}
            isHost={this.state.isHost}
            code={this.state.code}
            chameleon={this.state.chameleon}
            startGame={this.startGame}
            winningPlayer={this.state.winningPlayer}
            isChameleon={this.state.isChameleon}
            topic={this.selectedTopic}
            changeTopic={this.changeTopic}
          />
        )}
      </div>
    );
  }
}

export default App;
