export default commands => callback => ({
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

