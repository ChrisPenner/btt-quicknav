import linkCommand from './web-link-command'
import {projects} from '../config'

const options = projects.map(({name, datadogDashID}) => ({
    label: name,
    value: `https://app.datadoghq.com/dash/${datadogDashID}/${name}`,
}))

export default linkCommand({
    title: 'Datadog',
    options: options,
})

