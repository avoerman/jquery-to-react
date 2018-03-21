import React, { Component } from 'react';
import Boxscore from './boxscore/Boxscore';
import AddPlay from './add-play/AddPlay';
import { aggregateBoxItem, convertPlayToBoxItem } from '../util/boxscore-functions';

class BoxscoreGenerator extends Component {
    constructor() {
        super();
        this.state = {
            boxItems: [{
                player: 'G. Antetokounmpo',
                pts: 12,
                fg: 2, fga: 4,
                three: 0, threeAtt: 1,
                ft: 5, fta: 5,
                reb: 6,
                ast: 1,
                stl: 3,
                blk: 2
            }]
        };
    }

    addedPlay = (play) => {
        if (!play.player) {
            return;
        }

        const playerIsInBoxscore = this.state.boxItems.some(item => item.player === play.player);
        const boxItem = convertPlayToBoxItem(play);

        if (!playerIsInBoxscore) {
            this.addToBoxscoreWithNewPlayer(boxItem);
        } else {
            this.addToExistingBoxscoreItem(boxItem);
        }
    };

    addToBoxscoreWithNewPlayer = (boxItem) => {
        this.setState({
            boxItems: [...this.state.boxItems, boxItem]
        });
    };

    addToExistingBoxscoreItem = (boxItem) => {
        this.setState({
            boxItems: this.state.boxItems.map(item => {
                return boxItem.player === item.player ? aggregateBoxItem(item, boxItem) : item;
            })
        });
    };

    render() {
        return (
            <div className="container">
                <Boxscore boxItems={this.state.boxItems}/>
                <AddPlay addedPlay={this.addedPlay}/>
            </div>
        );
    }
}

export default BoxscoreGenerator;
