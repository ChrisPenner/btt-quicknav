import {bttSecret} from '../secrets.js'

const baseCommand = { "BTTPredefinedActionType" : 246, "BTTPredefinedActionName" : "Execute Terminal Command (Synchronous, blocking)" }





export default ({title, options}) => ({
    title,
    options,
    onSelect: ({value}) => {
        if(value){
            const command =   {
                "BTTTerminalCommand" : value, 
                    ...command
            }
            const cmdString = JSON.stringify(command)
            window.location.href = `btt://trigger_action/?shared_secret=${bttSecret}&json={ "BTTTriggerClass" : "BTTTriggerTypeKeyboardShortcut", "BTTPredefinedActionType" : 137, "BTTPredefinedActionName" : "Execute Terminal Command (Async, non-blocking)", "BTTTerminalCommand" : "echo 'hey' > ~\/Desktop\/sample.txt", "BTTAdditionalConfiguration" : "1966123", "BTTTriggerOnDown" : 1, "BTTEnabled" : 1, "BTTShortcutKeyCode" : 29, "BTTShortcutModifierKeys" : 1966080, "BTTOrder" : 11 }"`
            // window.location.href = `btt://trigger_action/?shared_secret=${bttSecret}&json=${cmdString}`
        }
    },
})

// { "BTTTriggerClass" : "BTTTriggerTypeKeyboardShortcut", "BTTPredefinedActionType" : 137, "BTTPredefinedActionName" : "Execute Terminal Command (Async, non-blocking)", "BTTTerminalCommand" : "echo 'hey' > ~\/Desktop\/sample.txt", "BTTAdditionalConfiguration" : "1966123", "BTTTriggerOnDown" : 1, "BTTEnabled" : 1, "BTTShortcutKeyCode" : 29, "BTTShortcutModifierKeys" : 1966080, "BTTOrder" : 11 }
