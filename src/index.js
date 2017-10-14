import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactGA.initialize('UA-7465052-13');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
