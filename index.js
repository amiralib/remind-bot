require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();

const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  const timeouts = {
    sec: 1000,
    min: 60000,
    hr: 3600000
  };
  const regex = /^\!remind [0-9]+ (sec|min|hr)$/;
  const message = msg.content;
  if (regex.test(message)) {
    const params = message.split(' ').slice(start = 1);
    const timeout = parseInt(params[0], 10) * timeouts[params[1]];
    setTimeout(() => {
      msg.channel.send(`${params[0]} ${params[1]} has passed`);
    }, timeout);
  }
});