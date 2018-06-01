import bashCommand from './bash-command';
import {projects} from '../config'

const options = projects.map(({ide, name, path}) => ({
    label: name,
    value: `/usr/local/bin/${ide} ${path}`,
}))

export default bashCommand({
    title: 'Project',
    options: options,
})
