import slack from './commands/slack'
import pivotal from './commands/pivotal'
import linkCommand from './commands/web-link-command'
import bashCommand from './commands/bash-command';

// Add your projects here
export const projects = [
    { name: 'btt-quicknav'
    , githubPath: 'ChrisPenner/btt-quicknav'
    , path: '/Users/cpenner/dev/btt-quicknav'
    , ide: 'webstorm'
    },
]

// Jumpt to Github for each project
const githubOptions = projects.map(({name, githubPath}) => ({
    label: name,
    value: `https://github.com/${githubPath}`,
}))

const githubCommand = linkCommand({
    title: 'Github',
    options: githubOptions,
})

// Open projects in editor of choice
const projectOptions = projects.map(({ide, name, path}) => ({
    label: name,
    value: `/usr/local/bin/${ide} ${path}`,
}))

const projectCommand = bashCommand({
    title: 'Project',
    options: projectOptions,
})

// Search and open a slack channel for your slack team
const slackCommand = slack({slackTeamID: 'my-slack-team-id', slackAPIToken: 'my-slack-token'})

// Add your browser sessions here, selecting one will open the appropriate tabs
const sessions = [
    { name: 'social'
    , links: ['https://facebook.com', 'https://twitter.com']
    },
]

const sessionOptions = sessions.map(({name, links}) => ({
    label: name,
    value: `open -a Google\\ Chrome ${links.join(' ')}`,
}))

const sessionCommand = bashCommand({
    title: 'Session',
    options: sessionOptions,
})

// Search your currently open pivotal stories
const pivotalCommand = pivotal({pivotalProjectID: 'my-project-id', pivotalAPIToken: 'my-pivotal-api-token'})

// Add any commands you like! Or make your own!
export default [
        {label: 'github', value: githubCommand},
        {label: 'project', value: projectCommand},
        {label: 'slack', value: slackCommand},
        {label: 'session', value: sessionCommand},
        {label: 'pivotal', value: pivotalCommand},
]
