const { Client } = require('discord.js-selfbot-v13') // USES DISCORD.JS-SELFBOT-V13
const { token, usertoreadd, channelId, logSuccesses } = require('./config.json'); // GET CONFIG

const client = new Client({
    checkUpdate: false 
})

// LOG TO CONSOLE WHEN THE BOT IS READY
client.on('ready', async () => { 
    console.log('Self-bot is ready')
});

// WHEN A USER LEAVES
client.on('channelRecipientRemove', (channel, leavingUser) => {

    if (channel.id === channelId && leavingUser.id === usertoreadd) {
        channel.addUser(leavingUser)
        .catch(console.error);
        if (logSuccesses) console.log(`Re-added ${leavingUser.username} to the group DM`) // LOG TO CONSOLE
    }
});

client.login(token)