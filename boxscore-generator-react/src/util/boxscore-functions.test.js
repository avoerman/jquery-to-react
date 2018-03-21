import { aggregateBoxItem, convertPlayToBoxItem } from 'boxscore-generator-react/src/util/boxscore-functions';

describe('convertPlayToBoxItem', () => {
    it('should convert a field goal to a boxscore item with 2 pts', () => {
        const play = {
            player: 'Alec Peters',
            fgMake: 1, fgMiss: 0,
            threeMake: 0, threeMiss: 0,
            ftMake: 0, ftMiss: 0,
            reb: 0,
            ast: 0,
            stl: 0,
            blk: 0
        };

        const boxItem = convertPlayToBoxItem(play);

        expect(boxItem.player).toBe('Alec Peters');
        expect(boxItem.pts).toBe(2);
        expect(boxItem.fg).toBe(1);
        expect(boxItem.fga).toBe(1);
        expect(boxItem.three).toBe(0);
        expect(boxItem.threeAtt).toBe(0);
        expect(boxItem.ft).toBe(0);
        expect(boxItem.fta).toBe(0);
        expect(boxItem.reb).toBe(0);
        expect(boxItem.ast).toBe(0);
        expect(boxItem.stl).toBe(0);
        expect(boxItem.blk).toBe(0);
    });

    it('should convert a made three to a boxscore item', () => {
        const play = {
            player: 'Alec Peters',
            fgMake: 0, fgMiss: 0,
            threeMake: 1, threeMiss: 0,
            ftMake: 0, ftMiss: 0,
            reb: 0,
            ast: 0,
            stl: 0,
            blk: 0
        };

        const boxItem = convertPlayToBoxItem(play);

        expect(boxItem.player).toBe('Alec Peters');
        expect(boxItem.pts).toBe(3);
        expect(boxItem.fg).toBe(0);
        expect(boxItem.fga).toBe(0);
        expect(boxItem.three).toBe(1);
        expect(boxItem.threeAtt).toBe(1);
        expect(boxItem.ft).toBe(0);
        expect(boxItem.fta).toBe(0);

    });

    it('should convert a made free throw to a boxscore item', () => {
        const play = {
            player: 'Alec Peters',
            fgMake: 0, fgMiss: 0,
            threeMake: 0, threeMiss: 0,
            ftMake: 1, ftMiss: 0,
            reb: 0,
            ast: 0,
            stl: 0,
            blk: 0
        };

        const boxItem = convertPlayToBoxItem(play);

        expect(boxItem.player).toBe('Alec Peters');
        expect(boxItem.pts).toBe(1);
        expect(boxItem.fg).toBe(0);
        expect(boxItem.fga).toBe(0);
        expect(boxItem.three).toBe(0);
        expect(boxItem.threeAtt).toBe(0);
        expect(boxItem.ft).toBe(1);
        expect(boxItem.fta).toBe(1);
    });

    it('should not count misses as pts', () => {
        const play = {
            player: 'Alec Peters',
            fgMake: 0, fgMiss: 1,
            threeMake: 0, threeMiss: 1,
            ftMake: 0, ftMiss: 1,
            reb: 0,
            ast: 0,
            stl: 0,
            blk: 0
        };

        const boxItem = convertPlayToBoxItem(play);

        expect(boxItem.player).toBe('Alec Peters');
        expect(boxItem.pts).toBe(0);
        expect(boxItem.fg).toBe(0);
        expect(boxItem.fga).toBe(1);
        expect(boxItem.three).toBe(0);
        expect(boxItem.threeAtt).toBe(1);
        expect(boxItem.ft).toBe(0);
        expect(boxItem.fta).toBe(1);
    });

});

describe('aggregateBoxItem', () => {
    it('should add box items together', () => {
        const existingItem = {
            player: 'Nate Wolters',
            pts: 7,
            fg: 2,
            fga: 2,
            three: 1,
            threeAtt: 4,
            ft: 1,
            fta: 2,
            reb: 0,
            ast: 7,
            stl: 1,
            blk: 0
        };

        const incomingItem = {
            player: 'Nate Wolters',
            pts: 3,
            fg: 0,
            fga: 0,
            three: 1,
            threeAtt: 1,
            ft: 0,
            fta: 0,
            reb: 0,
            ast: 0,
            stl: 0,
            blk: 0
        };

        const addedTogether = aggregateBoxItem(existingItem, incomingItem);

        expect(addedTogether.player).toBe('Nate Wolters');
        expect(addedTogether.pts).toBe(10);
        expect(addedTogether.fg).toBe(2);
        expect(addedTogether.fga).toBe(2);
        expect(addedTogether.three).toBe(2);
        expect(addedTogether.threeAtt).toBe(5);
        expect(addedTogether.ft).toBe(1);
        expect(addedTogether.fta).toBe(2);
        expect(addedTogether.reb).toBe(0);
        expect(addedTogether.ast).toBe(7);
        expect(addedTogether.stl).toBe(1);
        expect(addedTogether.blk).toBe(0);
    });
});