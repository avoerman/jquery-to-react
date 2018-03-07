import React, { Component } from 'react';
import BoxRow from './BoxRow';

class Boxscore extends Component {
  render() {
    const { boxItems } = this.props;
    const totalItems = this.itemTotaler(this.props.boxItems);
    return (
      <div className="box">
        <p className="title">Boxscore</p>
        <table className="table is-striped is-fullwidth" id="boxscore-table">
          <thead>
            <tr className="header">
              <th>Player</th>
              <th>PTS</th>
              <th>FG</th>
              <th>FG%</th>
              <th>3PT</th>
              <th>3PT%</th>
              <th>FT</th>
              <th>FT%</th>
              <th>REB</th>
              <th>AST</th>
              <th>STL</th>
              <th>BLK</th>
            </tr>
          </thead>
          <tbody>
            {boxItems.map(item => <BoxRow key={item.player} boxItem={item} />)}
            <BoxRow className="total" boxItem={totalItems} />
          </tbody>
        </table>
      </div>
    );
  }

  itemTotaler(boxItems = []) {
    return boxItems.reduce(
      (prev, cur) => {
        return {
          player: 'TOTAL',
          pts: prev.pts + cur.pts,
          fg: prev.fg + cur.fg,
          fga: prev.fga + cur.fga,
          three: prev.three + cur.three,
          threeAtt: prev.threeAtt + cur.threeAtt,
          ft: prev.ft + cur.ft,
          fta: prev.fta + cur.fta,
          reb: prev.reb + cur.reb,
          ast: prev.ast + cur.ast,
          stl: prev.stl + cur.stl,
          blk: prev.blk + cur.blk
        };
      },
      {
        pts: 0,
        fg: 0,
        fga: 0,
        three: 0,
        threeAtt: 0,
        ft: 0,
        fta: 0,
        reb: 0,
        ast: 0,
        stl: 0,
        blk: 0
      }
    );
  }
}

export default Boxscore;
