import projects from './projects'

export default [
    { name: 'monitoring'
    , links: projects.map(({datadogDashID, name}) => `https://app.datadoghq.com/dash/${datadogDashID}/${name}`),
    },
]
