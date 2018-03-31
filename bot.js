const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.content === 'Hello') {
    message.channel.send('Hello there!');
  }
});

client.login('YOUR_DISCORD_BOT_TOKEN_HERE');
