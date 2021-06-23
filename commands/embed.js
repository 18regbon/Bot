const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: 'embed',
    permission: 'ADMINISTRATOR',
    permissionError: 'You do not have permission to do this command.',
    

    callback: (message, args) => {
        const channelID = '857205044293926942'

        const embed = new MessageEmbed()
        .setTitle('ChatBot')
        .setDescription('Hey, Typing in  This Channel To Have A Conversation With Our Bot That Is Currently In The Making,\n Even If There Are Multiply People Talking It will Still Reply To You Specifically!!')
        .setColor('00FF00')
        message.channel.send(embed)
        message.delete()
    }
}