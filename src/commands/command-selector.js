import github from './github'
import datadog from './datadog'
import logs from './logs'
import missionControl from './mission-control'
import cloudBuilder from './cloud-builder'

export default callback => ({
    title: 'Select Action',
    options: [
        {label: 'github', value: github},
        {label: 'datadog', value: datadog},
        {label: 'logs', value: logs},
        {label: 'mission control', value: missionControl},
        {label: 'cloud-builder', value: cloudBuilder},
        // {label: 'project', value: 'project'},
        // {label: 'pivotal', value: 'pivotal'},
    ],
    onSelect: ({value}) => callback(value)
})

