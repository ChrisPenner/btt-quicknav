import linkCommand from './web-link-command'
import {projects} from '../config'

const backendProjects = projects.filter(({type}) => type === 'backend');

const projectNames = [].concat(...backendProjects.map(({name}) => [
    `${name}-test`,
    `${name}-demo`,
    `${name}-prod`,
]));

const options = projectNames.map(project => ({
    label: project,
    value: `https://console.cloud.google.com/logs/viewer?project=repcore-prod&&resource=container%2Fcluster_name%2Fvendasta-central%2Fnamespace_id%2F${project}`,
}))

export default linkCommand({
    title: 'Logs',
    options: options,
})
