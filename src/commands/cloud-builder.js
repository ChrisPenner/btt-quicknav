import linkCommand from './web-link-command'
import {projects} from '../config'

console.error(projects)

const options = projects.map(({name}) => ({
    label: name,
    value: `https://console.cloud.google.com/gcr/builds?project=repcore-prod&organizationId=39943578564&query=source.repo_source.repo_name%3D%22github-vendasta-${name}%22&authuser=1`,
}))

export default linkCommand({
    title: 'Mission Control',
    options: options,
})
