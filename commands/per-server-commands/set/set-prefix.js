const db = require('quick.db')

module.exports = {
    commands: ['setprefix'], // You Can Keep Any Name
    description: 'Set Prefix For Server', // Optional
    permissions: 'ADMINISTRATOR', // You Can Keep Any Permission
    permissionError: 'You Do Not Have Permission To Use This Command', // Optional

    callback: async(message, args, client) => {

        const newprefix = args[0] // New Prefix
        if(!newprefix) return message.reply('What Prefix Do You Want To Keep As?') // If No Prefix Is Added
        else if(newprefix.length > 4) return message.reply('Your Prefix Is Too Long, Chose Shorter(Less Then 4 Character)') // If Prefix Is More Then 4 Character's
        else {
            message.reply(`Prefix Set As **${newprefix}**`)
            db.set(`prefix_${message.guild.id}`, newprefix) // Set New Prefix
        }
    }
}