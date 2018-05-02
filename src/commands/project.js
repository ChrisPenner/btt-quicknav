import linkCommand from './web-link-command'
import projects from '../projects.js'

const options = projects.map(({ide, name}) => ({
    label: name,
    value: `${ide}://open`
}))

export default linkCommand({
    title: 'Project',
    options: options,
})
