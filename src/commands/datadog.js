import linkCommand from './web-link-command'
import projects from '../projects'

const options = projects.map(({name, datadogDashID}) => ({
    label: name,
    value: `https://app.datadoghq.com/dash/${datadogDashID}/${name}`,
}))

export default linkCommand({
    title: 'Datadog',
    options: options,
})

