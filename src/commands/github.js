import linkCommand from './web-link-command'
import {projects} from '../config'

const options = projects.map(({name}) => ({
    label: name,
    value: `https://github.com/vendasta/${name}`,
}))

export default linkCommand({
    title: 'Github',
    options: options,
})

