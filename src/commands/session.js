import bashCommand from './bash-command';
import {sessions} from '../config';

const options = sessions.map(({name, links}) => ({
    label: name,
    value: `open -a Google\\ Chrome ${links.join(' ')}`,
}))

export default bashCommand({
    title: 'Session',
    options: options,
})
