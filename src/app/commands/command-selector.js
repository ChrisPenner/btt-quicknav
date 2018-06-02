import commands from '../command-config'

export default callback => ({
    title: 'Select Action',
    options: commands,
    onSelect: ({value}) => {
        if(typeof value === 'function') {
            value().then(command => callback(command))
        } else {
            callback(value)
        }
    }
})

