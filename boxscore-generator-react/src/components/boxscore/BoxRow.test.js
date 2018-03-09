import React from 'react';
import BoxRow from './BoxRow';
import { shallow } from 'enzyme';

describe('<BoxRow />', () => {
    it('shows correct stats', () => {
        const boxItem = {
            player: 'Ray Allen',
            pts: 10,
            fg: 2,
            fga: 5,
            three: 2,
            threeAtt: 6,
            ft: 0,
            fta: 2,
            reb: 1,
            ast: 2,
            blk: 2,
            stl: 3
        };
        const row = shallow(<BoxRow boxItem={boxItem}/>);
        const tds = row.find('td');

        expect(tds.at(0).text()).toBe('Ray Allen');
        expect(tds.at(1).text()).toBe('10');
        expect(tds.at(2).text()).toBe('2 - 5');
        expect(tds.at(3).text()).toBe('40.0%');
        expect(tds.at(4).text()).toBe('2 - 6');
        expect(tds.at(5).text()).toBe('33.3%');
        expect(tds.at(6).text()).toBe('0 - 2');
        expect(tds.at(7).text()).toBe('0');
        expect(tds.at(8).text()).toBe('1');
        expect(tds.at(9).text()).toBe('2');
        expect(tds.at(10).text()).toBe('3');
    });
});
