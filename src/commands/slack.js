import linkCommand from './web-link-command'
import projects from '../projects'
import {slackTeamID, slackToken} from '../secrets.js'

export default () =>
    fetch(`https://slack.com/api/channels.list?exclude_members=true&exclude_archived=true&token=${slackToken}`)
    .then(resp => resp.json())
    .then(({channels}) => {
        const options = channels.map(({name, id}) => ({
            label: name,
            value: `slack://channel?id=${id}&team=${slackTeamID}`
        }))
        return linkCommand({
            title: 'Slack',
            options: options,
        })
    })
