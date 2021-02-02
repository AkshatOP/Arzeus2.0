  
const Discord = require("discord.js");
//const bot = new Discord.Client();

module.exports.run = async (bot, message, args) => {

        let days = Math.floor(message.client.uptime / 86400000);
        let hours = Math.floor(message.client.uptime / 3600000) % 24;
        let minutes = Math.floor(message.client.uptime / 60000) % 60;
        let seconds = Math.floor(message.client.uptime / 1000) % 60;

        const embed = new Discord.MessageEmbed()
            .setTitle("**__Arzeus 2.0 Uptime:-__**")
            .setColor("GOLD")
            .setDescription(`${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`)
           // console.log(message.bot.uptime)
        message.channel.send(embed);
    }

module.exports.help = {
  name:"uptime",
  aliases: [""]
}
