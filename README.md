# RemindBot
A Discord bot for setting reminders for yourself and your friends.

## Description
RemindBot is a bot that can be added to Discord servers to set periodic reminders.
It allows users to call it as a command and provide a set interval of to remind them after.

## Getting Started

### Requirements
- [Node.js](https://nodejs.org/en/)
- [Discord](https://discord.com) Account
- [Yarn](https://yarnpkg.com/)

### Installation
1. Clone the repository
2. Run `yarn install` inside the root of the project
3. Create a Discord application by following these [steps](https://discordpy.readthedocs.io/en/latest/discord.html)
4. Create a `.env` file in the project and set the token from the Discord bot you created as follows:   
```TOKEN=[your bot's token]```
5. Run `node index.js`
6. Add your bot to your servers and begin using it

### Using RemindBot
The bot takes a single command, formatted as follows:  
```!remind [amount of time] [unit of time] [mentions]``` 
- Amount of time: a positive integer 
- Unit of time: `sec`, `min`, or `hr`
- Mentions: a list of users that will be mentioned when the set time has elapsed. The mention is formatted as such: `@[username/nickname]`

## Acknowledgments
- [discord-bot-sitepoint](https://github.com/sitepoint-editors/discord-bot-sitepoint/blob/master/README.md)