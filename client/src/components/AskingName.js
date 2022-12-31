import React, { Component } from 'react'

import './AskingName.css';

export default class AskingName extends Component {

    constructor(props) {
        super(props);

    }
    joinGame = () => {
        this.props.login()
        this.props.renderPage('splash');
    }
    render() {
        return (
            <div>
                <div className="main-container --splash">
                    <div className="brand">
                        <h1>Chameleon</h1>
                    </div>
                    <div className="button-group">
                    <div>
                                <label>Name</label>
                                <input onChange={this.props.changeName} />
                            </div>
                            <button className="button--default" onClick={this.joinGame}>GO</button>

                    </div>
                </div>
            </div>
        )
    }
}
