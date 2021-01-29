const Discord = require("discord.js");

module.exports = { 
name: "ping", 
aliases: [], 
description: "Display all commands and descriptions", 
execute(message ,args , client) {

        message.channel.send("**Pinging...**").then(m => {
            let ping = m.createdTimestamp - message.createdTimestamp
            const embed = new Discord.MessageEmbed()
                .setColor("GOLD")
                .setTitle(`__${client.user.username}'s Ping:-__`)
                .setDescription(`**Pong:-** ${ping}ms`)
            message.channel.send(embed)
            m.delete()
        })
    }
};

module.exports.help = {
  name:"ping",
  aliases: ["pong"]
}