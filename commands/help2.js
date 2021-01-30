const Discord = require('discord.js')


module.exports.run = async (bot, message, args) => {
  
  let prefix = process.env.prefix
  
  const embed = new Discord.MessageEmbed()

let command = bot.commands.get(bot.aliases.get)//(args[0].toLowerCase()) || args[0].toLowerCase())
            if (!command) return message.channel.send(embed.setTitle("**Invalid Command!**").setDescription(`**Do \`${prefix}help\` For the List Of the Commands!**`))
            command = command.config

            embed.setColor('GOLD')  
            embed.setDescription(`**${bot.user.username}'s' Prefix Is \`${prefix}\`**\n
            ** Command -** ${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)}\n
            ** Description -** ${command.description || "No Description provided."}\n
            ** Usage -** ${command.usage ? `\`${prefix}${command.name} ${command.usage}\`` : "No Usage"}\n
            ** Needed Permissions -** ${command.accessableby || "everyone can use this command!"}\n
            ** Aliases -** ${command.aliases ? command.aliases.join(", ") : "None."}`)
            embed.setFooter(message.guild.name, message.guild.iconURL())

            return message.channel.send(embed)
  
}

module.exports.help = {
  name:"help2",
  aliases: ["h2"]
}
