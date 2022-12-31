import React, { Component } from "react";

import "./CreateGame.css";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { Game } from "../objects/game";

export default class JoinGame extends Component {
  constructor(props) {
    super(props);

    this.name = React.createRef();
    this.code = React.createRef();
  }

  back = () => {
    this.props.renderPage("splash");
  };

  join = async (e) => {
    e.preventDefault();
    let db = this.props.db;
    const docRef1 = doc(db, "rooms", this.code.current.value);
    const room = await getDoc(docRef1);
    if (room.exists()) {
      this.props.setCode(room.data().code);
      this.props.player.room=room.data().code
      const cityRef = doc(db, "players_online", this.props.player.player_id);
      setDoc(cityRef, { isHost: false, room: room.data().code }, { merge: true });

      let game = Object.assign(new Game(), room.data());
      game.playerJoin(this.props.player);
      var json = game.toJSON();
      await setDoc(doc(db, "rooms", game.code), json, { merge: true });

      this.props.notify_player("game_joined", {
        player_id: this.props.player.player_id,
        code: game.code,
      });
      this.props.renderPage("lobby");
    } else {
      this.props.setMessage("Invalid");
    }

    //
    // if(this.props.message === 'Game does not exist.') {
    //     return;
    // } else {
    //     this.props.renderPage('lobby');
    // }
  };

  forceUpper = () => {
    this.code.current.value = this.code.current.value.toUpperCase();
  };

  render() {
    return (
      <div>
        <div className="main-container --join">
          <div className="back" onClick={this.back}></div>
          <div className="title">
            <h2>Join a Game</h2>
          </div>
          <form className="form-group">
            <label>Game Code</label>
            <input maxLength="4" ref={this.code} onChange={this.forceUpper} />
            <button
              className="button--default"
              onClick={this.join}
              type="submit"
            >
              Join Game
            </button>
          </form>
        </div>
      </div>
    );
  }
}
