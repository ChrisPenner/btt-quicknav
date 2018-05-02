export default ({title, options}) => ({
    title,
    options,
    onSelect: ({value}) => {
        if(value){
            window.location.href = value
        }
    },
})

