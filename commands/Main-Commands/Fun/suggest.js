const { MessageEmbed } = require("discord.js")

module.exports = (client) => {
    const suggestinChannel = client.channels.cache.get('856222416312598551') // Channel For Suggestion
    client.on('message', message => {
        if(message.channel === suggestinChannel) {
            if(message.author.bot) return // Doesnot Delete BOTs Messages
            message.delete() // Delete Original Message Sent By User

            const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic:true }))
            .setDescription(`${message.content}`)
            .setFooter('Want To Suggest Something? Type In This Channel.')
            message.channel.send(embed).then(message => { // Reactions
                message.react('<a:Tick:856223574918561832>') // Change Emoji
                message.react('<a:Cross:856223539278905355>') // Change Emoji
            })
        }
    })
}