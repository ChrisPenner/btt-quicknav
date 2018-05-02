import linkCommand from './web-link-command'
import cachedCommand from './cached-command'
import {pivotalProjectID} from '../projects'
import {pivotalToken} from '../secrets'

export default cachedCommand(() => {
    return fetch(`https://www.pivotaltracker.com/services/v5/projects/${pivotalProjectID}/stories?filter=state%3Astarted`, {
        method: 'GET',
        headers: {
            'X-TrackerToken': pivotalToken,
        },
    })
    .then(resp => resp.json())
    .then((stories) => {
        const options = stories.map(({name, url, id}) => ({
            label: `${name} - [#${id}]`,
            value: url,
        }))
        return linkCommand({
            title: 'Pivotal',
            options: options,
        })
    })
})
