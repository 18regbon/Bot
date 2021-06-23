const ms = require('ms')
const { MessageEmbed } = require("discord.js")

module.exports = {
    commands: 'tempmute',
    description: 'Tempmutes A User',
    permissions: 'VIEW_AUDIT_LOG',
    permissionError: 'You do not have permission to do this command.',
    expectedArgs: '!tempmute @User',

    callback: (message, args) => {
        const member = message.mentions.members.first()
        member.roles.add('825399811858759731')
        const time = args[1]
        if(!member) return message.reply('Please Mention A User To Tempmute')
        if(!time) return message.reply('Please Specify A Time To Mute')

        if(member.roles.cache.has('825399811858759731')) return message.reply('User Is Already Muted.')
        member.roles.add('825399811858759731')

        const embed = new MessageEmbed()
        .setTitle('User Tempmuted')
        .setDescription(`<@${member.user.id}> has been tempmuted for ${time}`)
        .addField('Muted By', message.author)
        .setColor('RANDOM')
        message.channel.send(embed)

        setTimeout(async () => {
            await member.roles.remove('825399811858759731')
            message.channel.send(`<@${member.user.id}> has been unmuted after ${time} of being muted`)
        }, ms(time))
    }
}