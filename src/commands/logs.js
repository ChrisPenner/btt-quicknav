import linkCommand from './web-link-command'

const projects = [
    'advertising',
    'advertising-accounts',
    'adwords-service',
]

const projectNames = [].concat(...projects.map(project => [
    `${project}-test`,
    `${project}-demo`,
    `${project}-prod`,
]));

const options = projectNames.map(project => ({
    label: project,
    value: `https://console.cloud.google.com/logs/viewer?project=repcore-prod&&resource=container%2Fcluster_name%2Fvendasta-central%2Fnamespace_id%2F${project}`,
}))

export default linkCommand({
    title: 'Logs',
    options: options,
})
