module.exports = {
    commands: ['ping'],
    description:'Simple Ping Command',
    callback: (message,args) => {
        message.reply('Pong!')
    }
}