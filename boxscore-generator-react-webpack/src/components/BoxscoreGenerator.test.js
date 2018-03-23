import React from 'react';
import ReactDOM from 'react-dom';
import BoxscoreGenerator from './BoxscoreGenerator';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BoxscoreGenerator/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
