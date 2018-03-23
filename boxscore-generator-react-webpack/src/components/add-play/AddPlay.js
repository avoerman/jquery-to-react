import React, { Component } from 'react';
import './AddPlay.css';

const defaultPlay = {
    player: '',
    fgMake: 0, fgMiss: 0,
    threeMake: 0, threeMiss: 0,
    ftMake: 0, ftMiss: 0,
    reb: 0,
    ast: 0,
    stl: 0,
    blk: 0
};

class AddPlay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            player: ''
        };
    }

    handlePlayerInput = (e) => {
        const playerValue = e.target.value;
        this.setState({ player: playerValue });
    };

    handlePlay = (variable) => {
        if (this.state.player) {
            this.props.addedPlay({ ...defaultPlay, player: this.state.player, [variable]: 1 });
        }
    };

    render() {
        return (
            <div className="box">
                <p className="subtitle">Add Play</p>
                <div className="columns">
                    <div className="column is-one-quarter">
                        <div className="field">
                            <label htmlFor="player" className="label">Player</label>
                            <div className="control">
                                <input onChange={this.handlePlayerInput} className="input" type="text"/>
                            </div>
                        </div>
                    </div>
                    <div className="column play-buttons">
                        <div>
                            <button className="button is-success" onClick={() => this.handlePlay('fgMake')}>FG MADE</button>
                            <button className="button is-danger" onClick={() => this.handlePlay('fgMiss')}>FG MISS</button>
                            <button className="button is-success" onClick={() => this.handlePlay('threeMake')}>3P MAKE</button>
                            <button className="button is-danger" onClick={() => this.handlePlay('threeMiss')}>3P MISS</button>
                            <button className="button is-success" onClick={() => this.handlePlay('ftMake')}>FT MAKE</button>
                            <button className="button is-danger" onClick={() => this.handlePlay('ftMiss')}>FT MISS</button>
                        </div>
                        <div className="button-row-2">
                            <button className="button is-info" onClick={() => this.handlePlay('reb')}>REB</button>
                            <button className="button is-info" onClick={() => this.handlePlay('ast')}>AST</button>
                            <button className="button is-info" onClick={() => this.handlePlay('stl')}>STL</button>
                            <button className="button is-info" onClick={() => this.handlePlay('blk')}>BLK</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddPlay;