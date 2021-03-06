const { MessageEmbed, MessageAttachment } = require("discord.js")
const Canvas = require('canvas') // npm i canvas
const { join } = require("path") // npm i path

module.exports = (client) => {
    client.on('guildMemberAdd', async member => {
        // console.log(member) // If You Want The User Info in Console(Terminal) Who Joined Server Then You Can Add This Line. // Optional

        const welcome = `824730335862063116`
        const rules = `825737531907637278`
        const roles = `825396546379055165`

        if(!member.guild) return

        const canvas = Canvas.createCanvas(1770, 635) // Create Canvas Of Your Wish
        const ctx = canvas.getContext('2d') // 2d Only For Now
        const background = await Canvas.loadImage(join(__dirname, '../../../images', 'welcome.png')) // BackGround Image
        ctx.drawImage(background, 0 ,0, canvas.width, canvas.height) // Setting BackGround Image
        ctx.strokeStyle = '#FFFFFF' // Keep Color As Nothing

        ctx.strokeRect(0, 0, canvas.width, canvas.height)
        var name = `${member.user.username}` // UserName Of User Who Joined
        if(name.length >= 16) { // If Name Is To Long(More Then 16)
            ctx.font = 'bold 100px Sans' // Defining Size, Font
            ctx.fillStyle = '#0FEEF3' // Keep Color Of UserName
            ctx.fillText(name, 680, canvas.height / 2 - 1) // 720 Is Width From Left To Right
        } else { // If UserName Is Smaller Then 16 Then...
            ctx.font = 'bold 130px Sans' // Defining Size, Font
            ctx.fillStyle = '#0FEEF3' // Keep Color Of UserName
            ctx.fillText(name, 680, canvas.height / 2 - 1) // 720 Is Width From Left To Right // You Can Change According To Your Will
        }

        var discrim = `#${member.user.discriminator}` // Discriminator Of User
        ctx.font = 'bold 60px Sans'  // Defining Size, Font
        ctx.fillStyle = '#FA9448' // Keep Color Of Discriminator
        ctx.fillText(discrim, 680, canvas.height / 2 + 70) // You Can Change According To Your Will

        var server = `Welcome To ${member.guild.name}` 
        ctx.font = 'bold 80px Sans'  // Defining Size, Font
        ctx.fillStyle = '#21FBA1' // Keep Color Of Discriminator
        ctx.fillText(server, 670, canvas.height / 2 - 150) // You Can Change According To Your Will

        var count = `Member #${member.guild.memberCount}th`
        ctx.font = 'bold 60px Sans'  // Defining Size, Font
        ctx.fillStyle = '#21FBA1' // Keep Color Of Discriminator
        ctx.fillText(count, 680, canvas.height / 2 + 160) // You Can Change According To Your Will

        ctx.beginPath()
        ctx.arc(315, canvas.height / 2, 250, 0, Math.PI * 2, true) // Avatar Of User
        ctx.closePath()
        ctx.clip() // Make Avatar As Circle, By Default Its Square

        const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'png' })) // Get Users Avatar
        ctx.drawImage(avatar, 65, canvas.height / 2- 250, 500 , 500) // Adjusting Avatar In Circle Of Image

        const attachment = new MessageAttachment(canvas.toBuffer(), 'welcome.png') // Send As Attachment

        const embed = new MessageEmbed() // Send As Embed
        .setAuthor('Welcome', member.user.displayAvatarURL({ dynamic: true }))
        .setDescription(`
Welcome to **${member.guild.name}**. Thanks for joining ${member.user}
Please read the <#${rules}>,
Don't forget to get some roles in <#${roles}>
And finally, Have a great Time!
        `)
        .setImage('attachment://welcome.png')
        .setColor('RANDOM')
        .attachFiles(attachment) // Send Welcome Image
        const channel = member.guild.channels.cache.get(welcome) // Get Welcome Channel
        channel.send(embed) // Send Embed
        member.roles.add('848520505413074964') // Add Role To User When Joins

    })


    const Leave = '855170229520433153' //Channel You Want to Send The Leave Message

    client.on('guildMemberRemove', async member => {
        
        const canvas = Canvas.createCanvas(1770, 635) // Create Canvas Of Your Wish
        const ctx = canvas.getContext('2d') // 2d Only For Now
        const background = await Canvas.loadImage(join(__dirname, '../../../images', 'welcome.png')) // BackGround Image
        ctx.drawImage(background, 0 ,0, canvas.width, canvas.height) // Setting BackGround Image
        ctx.strokeStyle = '#FFFFFF' // Keep Color As Nothing

        ctx.strokeRect(0, 0, canvas.width, canvas.height)
        var name = `${member.user.username}` // UserName Of User Who Joined
        if(name.length >= 16) { // If Name Is To Long(More Then 16)
            ctx.font = 'bold 100px Sans' // Defining Size, Font
            ctx.fillStyle = '#0FEEF3' // Keep Color Of UserName
            ctx.fillText(name, 680, canvas.height / 2 - 1) // 720 Is Width From Left To Right
        } else { // If UserName Is Smaller Then 16 Then...
            ctx.font = 'bold 130px Sans' // Defining Size, Font
            ctx.fillStyle = '#0FEEF3' // Keep Color Of UserName
            ctx.fillText(name, 680, canvas.height / 2 - 1) // 720 Is Width From Left To Right // You Can Change According To Your Will
        }

        var discrim = `#${member.user.discriminator}` // Discriminator Of User
        ctx.font = 'bold 60px Sans'  // Defining Size, Font
        ctx.fillStyle = '#FA9448' // Keep Color Of Discriminator
        ctx.fillText(discrim, 680, canvas.height / 2 + 70) // You Can Change According To Your Will

        var server = `Sad to see you gone.` 
        ctx.font = 'bold 80px Sans'  // Defining Size, Font
        ctx.fillStyle = '#21FBA1' // Keep Color Of Discriminator
        ctx.fillText(server, 670, canvas.height / 2 - 150) // You Can Change According To Your Will

        var count = `Now At #${member.guild.memberCount} Members`
        ctx.font = 'bold 60px Sans'  // Defining Size, Font
        ctx.fillStyle = '#21FBA1' // Keep Color Of Discriminator
        ctx.fillText(count, 680, canvas.height / 2 + 160) // You Can Change According To Your Will

        ctx.beginPath()
        ctx.arc(315, canvas.height / 2, 250, 0, Math.PI * 2, true) // Avatar Of User
        ctx.closePath()
        ctx.clip() // Make Avatar As Circle, By Default Its Square

        const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'png' })) // Get Users Avatar
        ctx.drawImage(avatar, 65, canvas.height / 2- 250, 500 , 500) // Adjusting Avatar In Circle Of Image

        const attachment = new MessageAttachment(canvas.toBuffer(), 'welcome.png') // Send As Attachment

        const embed = new MessageEmbed() // Send As Embed
        .setAuthor('Goodbye', member.user.displayAvatarURL({ dynamic: true }))
        .setImage('attachment://welcome.png')
        .setColor('RANDOM')
        .attachFiles(attachment) // Send Welcome Image
        const channel = member.guild.channels.cache.get(Leave) // Get Welcome Channel
        channel.send(embed) // Send Embed
        

    
    })
}