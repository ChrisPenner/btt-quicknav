import github from './github'
import datadog from './datadog'

export default callback => ({
    title: 'Select Action',
    options: [
        { value: github, label: 'github' },
        { value: datadog, label: 'datadog' },
        { value: 'pivotal', label: 'pivotal' },
        { value: 'logs', label: 'logs' },
        { value: 'cloud-builder', label: 'cloud-builder' },
        { value: 'project', label: 'project' },
    ],
    onSelect: ({value}) => callback(value)
})

