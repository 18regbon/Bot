const Discord = require('discord.js');
const client = new Discord.Client({ disableMentions: 'everyone', partials: ['MESSAGE', 'USER', 'REACTION']});

const EventEmitter = require('events')
EventEmitter.defaultMaxListeners = 30

client.queue = new Discord.Collection() 


const { token } = require('./config.json')
const welcome = require('./commands/Main-Commands/Mod/welcome');
const loadCommands = require('./commands/load-commands');
const uptime = require('./commands/Main-Commands/Fun/uptime')
const chatbot = require('./commands/Main-Commands/Fun/chatbot');


client.once('ready', () => {
    console.log('Ready.')
    
    setInterval(() => {
        const statuses = [
            `Almost Done ;)`,
            `Almost Done ;)`,
        ]

        const status = statuses[Math.floor(Math.random() * statuses.length)]
        client.user.setActivity(status, { type: "WATCHING"}) // Can Be WATCHING, STREAMING, LISTENING
    }, 200000) // Second You Want to Change Status, This Cahnges Every 2 Seconds

    welcome(client) 
    loadCommands(client)
    uptime(client)
    chatbot(client)
})


client.login(token)