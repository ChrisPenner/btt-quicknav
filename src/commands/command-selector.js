import github from './github'
import datadog from './datadog'
import logs from './logs'
import missionControl from './mission-control'
import cloudBuilder from './cloud-builder'
import slack from './slack'
import pivotal from './pivotal'
import launcher from './launcher'
import project from './project'
import session from './session'
import commands from '../command-config'

export default callback => ({
    title: 'Select Action',
    options: [
        {label: 'github', value: github},
        {label: 'datadog', value: datadog},
        {label: 'logs', value: logs},
        {label: 'mission control', value: missionControl},
        {label: 'cloud-builder', value: cloudBuilder},
        {label: 'pivotal', value: pivotal},
        {label: 'launcher', value: launcher},
        {label: 'project', value: project},
        {label: 'slack', value: slack},
        {label: 'session', value: session},
    ],
    onSelect: ({value}) => {
        if(typeof value === 'function') {
            value().then(command => callback(command))
        } else {
            callback(value)
        }
    }
})

