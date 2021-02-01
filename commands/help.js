const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
   // if(!message.content.startsWith('e!'))return;  


    let embed = new Discord.MessageEmbed()
    .setTitle("**__LIST OF MY COMMANDS__**")
    .addField("General Commands",`Ping`)
    .addField("General Commands", "`work` `beg` `rob` `pay` `balance` `profile` `withdraw` `deposit` `daily` `weekly` `store` `buy` `sell`")
    .addField("Gambling Commmands", "`slots`")
    .addField("Economy Extra Commands", "`storeinfo [item]`")
    .setColor("GOLD")
    message.channel.send(embed)




}

module.exports.help = {
  name:"help",
  aliases: [""]
}
