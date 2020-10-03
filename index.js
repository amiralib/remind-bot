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
  const commandRegex = /^!remind [0-9]+ (sec|min|hr)/;
  const message = msg.content;
  if (commandRegex.test(message)) {
    const params = message.split(' ').slice(1);
    const timeout = parseInt(params[0], 10) * timeouts[params[1]];
    const members = [];
    msg.mentions.users.forEach((user) => {
      members.push(user);
    });
    const mentions = members.map((user) => user.toString()).join(' ');
    setTimeout(() => {
      msg.channel.send(`${mentions} ${params[0]} ${params[1]} has passed`);
    }, timeout);
  } else {
    const regex = /^!remind/
    if (regex.test(message)) {
      msg.channel.send(
        'Incorrectly formatted command! The command should be of the form\n`!remind [amount of time] [sec, min, or hr] [user mentions]`'
      );
    }
  }
});