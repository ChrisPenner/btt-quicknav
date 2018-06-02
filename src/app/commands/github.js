import linkCommand from './web-link-command'
import {projects} from '../config'

const options = projects.map(({name, githubPath}) => ({
    label: name,
    value: `https://github.com/${githubPath}`,
}))

export default linkCommand({
    title: 'Github',
    options: options,
})

