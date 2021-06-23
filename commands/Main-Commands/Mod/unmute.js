const { MessageEmbed } = require("discord.js")

module.exports = {
    commands: ['unmute'], // You Can Keep ANy Name
    description: 'Unmutes A User.', // Optinal
    permissions: 'VIEW_AUDIT_LOG', // You Can Keep Any Permission
    permissionError: 'You Do Not Have Permission To Do This Command',
    expectedArgs: '!unmute @User', // Optional

    callback: (message, args) => {
        const member = message.mentions.members.first()
        if(!member) return message.reply('Please Mention A User To Mute.')
        member.roles.remove('825399811858759731') // Removes Mute Role to User
        if(!member.roles.cache.has('825399811858759731')) return message.reply('User Is Already Unmuted.') // If User Is Already Unmuted.

        const embed = new MessageEmbed()
        .setTitle('User Unmuted.')
        .setDescription(`<@${member.user.id}> Is Now Unmuted.`)
        .addField('Unmuted By', message.author)
        .setColor('RANDOM')
        message.channel.send(embed)
    }
}