import github from './github'
import datadog from './datadog'
import logs from './logs'
import missionControl from './mission-control'

export default callback => ({
    title: 'Select Action',
    options: [
        {label: 'github', value: github},
        {label: 'datadog', value: datadog},
        {label: 'logs', value: logs},
        {label: 'mission control', value: missionControl},
        // {label: 'project', value: 'project'},
        // {label: 'pivotal', value: 'pivotal'},
        // {label: 'cloud-builder', value: 'cloud-builder'},
    ],
    onSelect: ({value}) => callback(value)
})

