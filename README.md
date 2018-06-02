Better Touch Tool Quick-navigator
=================================

A quick navigator to automate your workflow;

Currently has commands to help you:

- Jump to bookmarks
- Open browser sessions (or presets)
- Open slack channels
- Run bash commands
- Run arbitrary Better Touch Tool commands

![quicknav demo](./images/quicknav.gif)

## Installation

- `git clone https://github.com/ChrisPenner/btt-quicknav.git`
- `cd btt-quicknav`
- `npm install`

## Setup

In order to use quick-nav you'll need to set it up with whatever commands or configuration you like.

The config files are gitignored, but there are examples which you can use to get started:

- `cp example-secrets.json ./src/secrets.json` 
- Here you can configure secrets/api tokens for services you use
- `cp example-config.json ./src/config.json` 
- Here you can set up basic setting  which can be used by commands
- `cp example-command-config.json ./src/command-config.json` 
- Here you can configure which commands will be available or add your own commands


## Running

- `npm run build`: You'll need to set up your config files for this to succeed
- Add a new html overlay on some keyboard shortcut inside BTT

Basic settings:
![basic settings](./images/settings-basic.png)

Advanced settings:
![advanced settings](./images/settings-advanced.png)

## Writing your own commands

Writing your own commands is easy! A command is simply a javascript object with the following fields; OR a javascript
Promise that resolves to an object with these fields (for doing API calls as part of your command)

```javascript
{
    title: 'My Command'
    options: [{
        label: "My first option's label",
        value: "some-value"
    }],
    onSelect: ({label, value}) => {
        // Here you can do whatever you want when someone selects an option
        console.log('you ran the command with a label and value of:', label, value);
    },
}
```

I've already written a few helpers; see `src/commands/web-link-command.js` for a simple 'open browser' command, or
`src/commands/bash-command.js` for a command which helps you run bash commands on your computer. Each of these expose a
function which accepts an object with a `title` and `options` and build the appropriate command for you. Add each
command to your `src/command-config.js` and then `npm run build` for your new commands to show up.

## Troubleshooting

If nothing shows up when you hit your shortcut, it's possible the javascript has crashed. Try right-clicking where the
overlay should be and see if you get an option to `Inspect Element`; this will help you see what's going on. You can
also open the `build/index.html` in any normal browser to see what's happening.

A common mistake is to forget that BTT caches the overlay and 
