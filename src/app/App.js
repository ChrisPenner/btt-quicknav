import React, { Component } from 'react';
import './App.css';
import Finder from './finder/Finder';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import commandSelector from './commands/command-selector';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            command: commandSelector(command => this.setState({command})),
        };
    } 

  componentDidMount() {
      window.reset = () => this.setState({command: commandSelector(command => this.setState({command}))});
  }

  render() {
    return (
        <MuiThemeProvider>
            <div>
                <h1 className='title'>{this.state.command.title}</h1>
                <Finder options={this.state.command.options} onSelect={this.state.command.onSelect} />
            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
