import React from 'react';
import { render } from 'react-dom';
import './assets/index.css';

import App from './App';

const wrapper = document.getElementById('app');
wrapper && render(<App />, wrapper);
