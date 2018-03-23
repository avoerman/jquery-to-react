import React from 'react';

const percentage = (made, attempts) => {
    if (made === 0) {
        return 0;
    }
    return ((made / attempts) * 100).toFixed(1) + '%';
};

function BoxRow({ boxItem }) {
    return (
        <tr>
            <td>{boxItem.player}</td>
            <td>{boxItem.pts}</td>
            <td>{boxItem.fg} - {boxItem.fga}</td>
            <td>{percentage(boxItem.fg, boxItem.fga)}</td>
            <td>{boxItem.three} - {boxItem.threeAtt}</td>
            <td>{percentage(boxItem.three, boxItem.threeAtt)}</td>
            <td>{boxItem.ft} - {boxItem.fta}</td>
            <td>{percentage(boxItem.ft, boxItem.fta)}</td>
            <td>{boxItem.reb}</td>
            <td>{boxItem.ast}</td>
            <td>{boxItem.stl}</td>
            <td>{boxItem.blk}</td>
        </tr>
    );
}

export default BoxRow;