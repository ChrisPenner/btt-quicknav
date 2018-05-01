import React, { Component } from 'react';
import './App.css';
import Finder from './finder/Finder';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const githubCommand = () => Promise.resolve({
    name: 'Github',
    options: [
        {label: 'advertising', value: 'http://github.com/vendasta/advertising'},
        {label: 'advertising-accounts', value: 'http://github.com/vendasta/advertising-accounts'},
        {label: 'adwords-service', value: 'http://github.com/vendasta/adwords-service'},
    ],
    onSelect: ({value}) => window.location.href = value,
})

const commands = [
    { value: githubCommand, label: 'github' },
    { value: 'datadog', label: 'datadog' },
    { value: 'pivotal', label: 'pivotal' },
    { value: 'logs', label: 'logs' },
    { value: 'cloud-builder', label: 'cloud-builder' },
    { value: 'project', label: 'project' },
]

class App extends Component {
    constructor(props) {
        super(props);

        const basicCommand = {
            name: 'Hello!',
            options: commands,
            onSelect: ({value}) => value().then(command => this.setState({command})),
        }
        this.state = {
            command: basicCommand,
        };
    } 
  render() {
    return (
        <MuiThemeProvider>
            <h1>{this.state.command.name}</h1>
            <Finder options={this.state.command.options} onSelect={this.state.command.onSelect} />
        </MuiThemeProvider>
    );
  }
}

export default App;
