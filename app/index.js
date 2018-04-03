import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/routes';
import styles from './index.css';

ReactDOM.render(<BrowserRouter>
                <Routes/>
                </BrowserRouter>, document.getElementById('app'));
