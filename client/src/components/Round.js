import React, { Component } from 'react'

import Chat from './Chat';

import './Round.css';


export default class Round extends Component {

    constructor(props) {
        super(props);

        this.clue = React.createRef();
    }

    submitWord = e => {
        e.preventDefault();
        if(this.clue.current.value !== '') {
            this.props.socket.emit('word submitted', {code: this.props.code, word: this.clue.current.value});
        }
    }

    render() {
        return (
            <div>
                <div className="main-container --round">
                    <div className="round__topic">
                        <div className="round__topic__title">{this.props.topic.topic}</div>
                        {
                            this.props.topic.words.map(word => {
                                if(this.props.secretWord === word) {
                                    return <div className="round__topic__word highlighted">{word}</div>
                                } else {
                                    return <div className="round__topic__word">{word}</div>
                                }
                            })
                        }
                    </div>

                    {this.props.isChameleon && 
                        <div>
                            <h3>You are the</h3> 
                            <h2>CHAMELEON</h2>
                        </div>
                    }

                    {!this.props.isChameleon && 
                        <div>
                            <h3>The secret word is</h3>
                            {this.props.secretWord && <h2>{this.props.secretWord.toUpperCase()}</h2>}
                        </div>
                    }
                    <div className="round__timer">{this.props.currentTurn} has {this.props.timer} seconds to answer.</div>
                    {this.props.isMyTurn === true &&
                        <form className="form-group">
                            <label>Your clue:</label>
                            <input maxLength="36" ref={this.clue} />
                            
                            <button className="button--default" onClick={this.submitWord} type="submit">Submit</button>
                        </form>
                    }{this.props.isHost &&
                                                <button className="button--default" onClick={this.props.reset} type="submit">Reset Game</button>
                    }
                    <Chat messages={this.props.messages} code={this.props.code} socket={this.props.socket} />
                </div>
            </div>
        )
    }
}
