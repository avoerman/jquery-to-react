$(document).ready(function () {
    let globalBoxState = [];

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

    $('#fg-make').click(function () {
        addToBoxscore({ player: getPlayer(), fgMake: 1 });
    });

    $('#fg-miss').click(function () {
        addToBoxscore({ player: getPlayer(), fgMiss: 1 });
    });

    $('#three-make').click(function () {
        addToBoxscore({ player: getPlayer(), threeMake: 1 });
    });

    $('#three-miss').click(function () {
        addToBoxscore({ player: getPlayer(), threeMiss: 1 });
    });

    $('#ft-make').click(function () {
        addToBoxscore({ player: getPlayer(), ftMake: 1 });
    });

    $('#ft-miss').click(function () {
        addToBoxscore({ player: getPlayer(), ftMiss: 1 });
    });

    $('#reb').click(function () {
        addToBoxscore({ player: getPlayer(), reb: 1 });
    });

    $('#ast').click(function () {
        addToBoxscore({ player: getPlayer(), ast: 1 });
    });

    $('#stl').click(function () {
        addToBoxscore({ player: getPlayer(), stl: 1 });
    });

    $('#blk').click(function () {
        addToBoxscore({ player: getPlayer(), blk: 1 });
    });

    function getPlayer() {
        return $('#player').get(0).value;
    }

    function addToBoxscore(play) {
        if (!play.player) {
            return;
        }

        let sanitizedPlay = Object.assign({}, defaultPlay, play);

        let exists = globalBoxState.some(item => item.player === sanitizedPlay.player);
        let boxItem = boxItemFromPlay(sanitizedPlay);

        if (!exists) {
            globalBoxState.push(boxItem);
        } else {
            globalBoxState = globalBoxState.map(item => {
                return sanitizedPlay.player === item.player ? aggregatePlay(item, boxItem) : item;
            });
        }

        renderTable();
    }

    function boxItemFromPlay(play) {
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
    }

    function aggregatePlay(item, newItem) {
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
    }

    function renderTable() {
        let html = globalBoxState.map(boxItem => htmlBoxItemRow(boxItem));
        $('#boxscore-table').find('tr').not('.header').not('.total').remove();
        $('#boxscore-table').find('tbody').prepend(html);
        calculateTotals();
    }

    function calculateTotals() {
        let total = $('.total');
        let totalsRecord = totalAll();
        total.find('.pts-total').html(totalsRecord.pts);
        total.find('.fg-total').html(`${totalsRecord.fg} - ${totalsRecord.fga}`);
        total.find('.fgpc-total').html(`${percent(totalsRecord.fg, totalsRecord.fga)}%`);
        total.find('.three-total').html(`${totalsRecord.three} - ${totalsRecord.threeAtt}`);
        total.find('.threepc-total').html(`${percent(totalsRecord.three, totalsRecord.threeAtt)}%`);
        total.find('.ft-total').html(`${totalsRecord.ft} - ${totalsRecord.fta}`);
        total.find('.ftpc-total').html(`${percent(totalsRecord.ft, totalsRecord.fta)}%`);
        total.find('.reb-total').html(totalsRecord.reb);
        total.find('.ast-total').html(totalsRecord.ast);
        total.find('.stl-total').html(totalsRecord.stl);
        total.find('.blk-total').html(totalsRecord.blk);
    }

    function totalAll() {
        return globalBoxState.reduce((prev, cur) => {
                return {
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
            }, { pts: 0, fg: 0, fga: 0, three: 0, threeAtt: 0, ft: 0, fta: 0, reb: 0, ast: 0, stl: 0, blk: 0 }
        );
    }

    function htmlBoxItemRow(play) {
        return `<tr id="${play.player}">
                        <td>${play.player}</td>
                        <td>${play.pts}</td>
                        <td>${play.fg} - ${play.fga}</td>
                        <td>${percent(play.fg, play.fga)}%</td>
                        <td>${play.three} - ${play.threeAtt}</td>
                        <td>${percent(play.three, play.threeAtt)}%</td>
                        <td>${play.ft} - ${play.fta}</td>
                        <td>${percent(play.ft, play.fta)}%</td>
                        <td>${play.reb}</td>
                        <td>${play.ast}</td>
                        <td>${play.stl}</td>
                        <td>${play.blk}</td>
                    </tr>`;
    }

    function percent(made = 0, attempts = 0) {
        if (made === 0) {
            return 0;
        }
        return ((made / attempts) * 100).toFixed(1);
    }
});
