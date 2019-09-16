import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './variables.css';
import Site from './views/Site/Site';

const render = (Component) => {
    ReactDOM.render(<Component />, document.getElementById('root'));
};

render(Site);