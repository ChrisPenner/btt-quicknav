import {bttSecret} from '../secrets.js'

const bashCommand = {
    "BTTPredefinedActionType" : 137,
    "BTTPredefinedActionName" : "Execute Terminal Command (Async, non-blocking)",
    "closeFloatingHTMLMenu": 1,
}

export default ({title, options}) => ({
    title,
    options,
    onSelect: ({value}) => {
        console.log('running command:', value);
        if(value){
            const actionDefinition =   {
                    ...bashCommand,
                "BTTTerminalCommand" : value,
            }
            window.BTT.callHandler('trigger_action', {json: JSON.stringify(actionDefinition)})
        }
    },
})
