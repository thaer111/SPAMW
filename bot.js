const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("524140310968664095")
setInterval(function() {
channel.send(`hi spam room is good`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
