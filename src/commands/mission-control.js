import linkCommand from './web-link-command'
import {projects} from '../config'

const options = projects.map(({ name, type }) => ({
    label: name,
    value: `https://mission-control-prod.vendasta-internal.com/${type}/${name}`,
}))

export default linkCommand({
    title: 'Mission Control',
    options: options,
})
