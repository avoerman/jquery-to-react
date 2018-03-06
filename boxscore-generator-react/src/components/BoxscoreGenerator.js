import React, { Component } from 'react';
import Boxscore from './boxscore/Boxscore';
import AddPlay from './add-play/AddPlay';

const boxItemFromPlay = (play) => {
    return {
        player: play.player,
        pts: (play.fgMake * 2) + (play.threeMake * 3) + (play.ftMake),
        fg: play.fgMake,
        fga: (play.fgMake > 0 || play.fgMiss > 0) ? 1 : 0,
        three: play.threeMake,
        threeAtt: (play.threeMake > 0 || play.threeMiss > 0) ? 1 : 0,
        ft: play.ftMake,
        fta: (play.ftMake > 0 || play.ftMiss > 0) ? 1 : 0,
        reb: play.reb,
        ast: play.ast,
        stl: play.stl,
        blk: play.blk
    };
};

const aggregatePlay = (item, newItem) => {
    return {
        player: item.player,
        pts: item.pts + newItem.pts,
        fg: item.fg + newItem.fg,
        fga: item.fga + newItem.fga,
        three: item.three + newItem.three,
        threeAtt: item.threeAtt + newItem.threeAtt,
        ft: item.ft + newItem.ft,
        fta: item.fta + newItem.fta,
        reb: item.reb + newItem.reb,
        ast: item.ast + newItem.ast,
        stl: item.stl + newItem.stl,
        blk: item.blk + newItem.blk
    };
};

class BoxscoreGenerator extends Component {
    constructor() {
        super();
        this.state = {
            boxItems: [{
                player: 'G. Antetokounmpo',
                pts: 12,
                fg: 2,
                fga: 4,
                three: 0,
                threeAtt: 1,
                ft: 5,
                fta: 5,
                reb: 6,
                ast: 1,
                stl: 3,
                blk: 2
            }, {
                player: 'K. Middleton',
                pts: 4,
                fg: 2,
                fga: 3,
                three: 2,
                threeAtt: 3,
                ft: 1,
                fta: 2,
                reb: 2,
                ast: 3,
                stl: 1,
                blk: 0
            }]
        };
    }

    addedPlay(play) {
        if (!play.player) {
            return;
        }

        const exists = this.state.boxItems.some(item => item.player === play.player);
        const boxItem = boxItemFromPlay(play);

        if (!exists) {
            this.setState({
                boxItems: [...this.state.boxItems, boxItem]
            });
        } else {
            this.setState({
                boxItems: this.state.boxItems.map(item => {
                    return play.player === item.player ? aggregatePlay(item, boxItem) : item;
                })
            });
        }
    }

    render() {
        return (
            <div className="container">
                <Boxscore boxItems={this.state.boxItems}/>
                <AddPlay addedPlay={this.addedPlay.bind(this)}/>
            </div>
        );
    }
}

export default BoxscoreGenerator;
