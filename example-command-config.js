import github from './commands/github'
import missionControl from './commands/mission-control'
import cloudBuilder from './commands/cloud-builder'
import slack from './commands/slack'
import project from './commands/project'
import session from './commands/session'
// import pivotal from './commands/pivotal'
// import datadog from './commands/datadog'
// import logs from './commands/logs'

export const commands = [
        {label: 'github', value: github},
        {label: 'project', value: project},
        {label: 'slack', value: slack},
        {label: 'session', value: session},
        // {label: 'datadog', value: datadog},
        // {label: 'logs', value: logs},
        // {label: 'pivotal', value: pivotal},
]
