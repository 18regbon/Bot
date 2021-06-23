const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: 'mute',
    description: 'Mutes A User',
    permissions: 'VIEW_AUDIT_LOG',
    permissionError: 'You do not have permission to do this command.',
    expectedArgs: '!mute @User',

    callback: (message, args) => {
        const member = message.mentions.members.first()
        if(!member) return message.reply('Please Mention A User To Mute.')
        member.roles.add('825399811858759731')
        if(member.roles.cache.has('825399811858759731')) return message.reply('User Is Already Muted.')

        const embed = new MessageEmbed()
        .setTitle('User Muted')
        .setDescription(`<@${member.user.id}> Has Been Muted.`)
        .addField('Muted By', message.author)
        .setColor('RANDOM')
        message.channel.send(embed)
    }
}