module.exports = (client) => {
    const membercountchannel = '856927615902023691' // Channel Where You Want To Display Member Count // VC Recommended

    const updateMembers = (guild) => {
        const channel = guild.channels.cache.get(membercountchannel)
        channel.setName(`Member:- ${guild.memberCount.toLocaleString()}`) // Set Channel Name
    }
    //Updating Member Count WhenEver A User Joins Or Leave 
    client.on('guildMemberAdd', (member) => updateMembers(member.guild)) // Update Member's Count When SomeOne Joins
    client.on('guildMemberRemove', (member) => updateMembers(member.guild)) // Update Member's Count When SomeOne Leaves

    const guild = client.guilds.cache.get('824725222686982174') // Server ID
    updateMembers(guild)
}