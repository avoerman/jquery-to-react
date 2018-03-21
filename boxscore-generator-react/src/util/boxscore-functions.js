export const convertPlayToBoxItem = (play) => {
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

export const aggregateBoxItem = (item, newItem) => {
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