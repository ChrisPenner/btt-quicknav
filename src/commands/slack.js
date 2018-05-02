import linkCommand from './web-link-command'
import {slackTeamID, slackToken} from '../secrets.js'

let cache = null;

export default () => {
    if (cache) {
        return cache;
    }
    cache = fetch(`https://slack.com/api/channels.list?exclude_members=true&exclude_archived=true&token=${slackToken}`)
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
    return cache;
}
