$(document).ready(function () {
    let globalBoxState = [];

    $('#add').click(function () {
        let play = {
            player: $('#player').get(0).value,
            pts: Number.parseInt($('#pts').val() || 0),
            reb: Number.parseInt($('#reb').val() || 0),
            ast: Number.parseInt($('#ast').val() || 0),
            stl: Number.parseInt($('#stl').val() || 0),
            blk: Number.parseInt($('#blk').val() || 0)
        };

        if (play.player) {
            addToBoxscore(play);
            clearForm();
        }
    });

    function clearForm() {
        $('input').each(function (val, ref) {
            ref.value = '';
        });
    }

    function addToBoxscore(play) {
        let exists = globalBoxState.some(item => item.player === play.player);

        if (!exists) {
            globalBoxState.push(play);
        } else {
            globalBoxState = globalBoxState.map(item => {
                return play.player === item.player ? total(item, play) : item;
            });
        }

        renderTable();
    }

    function total(item, play) {
        return {
            player: item.player,
            pts: item.pts + play.pts,
            reb: item.reb + play.reb,
            ast: item.ast + play.ast,
            stl: item.stl + play.stl,
            blk: item.blk + play.blk
        };
    }

    function renderTable() {
        let html = globalBoxState.map(boxItem => htmlBoxItemRow(boxItem));
        $('#boxscore-table').find('tr').not('.header').not('.total').remove();
        $('#boxscore-table').find('tr.header').after(html);
        calculateTotals();
    }

    function calculateTotals() {
        let total = $('.total');
        let totalsRecord = totalAll();
        total.find('.pts-total').html(totalsRecord.pts);
        total.find('.reb-total').html(totalsRecord.reb);
        total.find('.ast-total').html(totalsRecord.ast);
        total.find('.stl-total').html(totalsRecord.stl);
        total.find('.blk-total').html(totalsRecord.blk);
    }

    function totalAll() {
        return globalBoxState.reduce((prev, cur) => {
                return {
                    pts: prev.pts + cur.pts,
                    reb: prev.reb + cur.reb,
                    ast: prev.ast + cur.ast,
                    stl: prev.stl + cur.stl,
                    blk: prev.blk + cur.blk
                };
            }, { pts: 0, reb: 0, ast: 0, stl: 0, blk: 0 }
        );
    }

    function htmlBoxItemRow(play) {
        return `<tr id="${play.player}">
                        <td>${play.player}</td>
                        <td>${play.pts}</td>
                        <td>${play.reb}</td>
                        <td>${play.ast}</td>
                        <td>${play.stl}</td>
                        <td>${play.blk}</td>
                    </tr>`;
    }
});
