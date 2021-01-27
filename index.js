const Discord = require("discord.js");
const config = require("./config.json");
const express = require('express');
const app = express();
const port = 3000

const client = new Discord.Client();
client.on('ready', () => {
    const guild = client.guilds.cache.get('341351229474996244');
    vs = guild.voiceStates.cache.get('302694029072793600');   

    //console.log(guild.voiceStates.cache.get('302694029072793600'));
})
app.get('/', (req, res) => {
    vs.kick();
    res.send('kickado')
  })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
const prefix = '!'




client.on("message", function(message) { 
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if (command === 'ping'){
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`Lag do caralho: ${timeTaken}ms.`);
    };
    if (command === 'date'){
        const timestampDate = Date.now();
        const Data = new Date(timestampDate).toDateString();
        message.reply(`Agora é ${Data + Data.getTime()}.`);
    };
    if (command === 'teste'){
        vs.kick()
    };
});


client.login(config.BOT_TOKEN);