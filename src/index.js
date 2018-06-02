import React from 'react';
import ReactDOM from 'react-dom';
import './app/index.css';
import createCommandFinder from './app/App';
import createCommandSelector from './commands/command-selector';
import registerServiceWorker from './app/registerServiceWorker';
import commands from './config'

const commandSelector = createCommandSelector(commands);
const App = createCommandFinder(commandSelector);
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
