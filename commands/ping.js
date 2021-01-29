const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

        message.channel.send("**Pinging...**").then(m => {
            let ping = m.createdTimestamp - message.createdTimestamp
            const embed = new Discord.MessageEmbed()
                .setColor("GOLD")
                .setTitle(`__${bot.user.username}'s Ping:-__`)
                .setDescription(`**Pong:-** ${ping}ms`)
            message.channel.send(embed)
            m.delete()
        })
    };

module.exports.help = {
  name:"ping",
  aliases: ["pong"]
}