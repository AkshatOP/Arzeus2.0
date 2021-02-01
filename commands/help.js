const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
   // if(!message.content.startsWith('e!'))return;  


    let embed = new Discord.MessageEmbed()
    .setTitle("**__LIST OF MY COMMANDS__**")
    .addField("><:pikasip:803606908103032852>General Commands","`Ping` `info <user>` `vote` `order` `afk` `avatar` `embed`")
    .addField("><a:moneyaabag:802503275085299752>Economy Commands", "`work` `beg` `rob` `pay` `balance` `profile` `withdraw` `deposit` `daily` `weekly` `store` `buy` ")
    .addField("><a:paisa:805769554470633482>Gambling Commmands", "`slots`")
    //.addField("> Economy Extra Commands", "`store`")
    .setColor("GOLD")
    message.channel.send(embed)




}

module.exports.help = {
  name:"help",
  aliases: [""]
}
