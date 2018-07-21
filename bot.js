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

client.login('NDYzMDIyMzczMzQ0NjQxMDI1.DjSuOA.84yNMGnT5Vu-8IyVgqBsXx_n9Xo');
