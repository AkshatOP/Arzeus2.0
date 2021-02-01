const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
   // if(!message.content.startsWith('e!'))return;  


    let embed = new Discord.MessageEmbed()
    .setTitle("**__LIST OF MY COMMANDS__**")
    .addField("> <:pikasip:803606908103032852> **1. General Commands**","`Ping` `info <user>` `vote` `order` `afk` `avatar` `embed`")
    //.addField("")
    .addField("> <a:moneyaabag:802503275085299752> **2. Economy Commands**", "`work` `beg` `rob` `pay` `balance` `profile` `withdraw` `deposit` `daily` `weekly` `store` `buy` ")
    .addField("> <a:paisa:805769554470633482> **3. Gambling Commmands**", "`slots`")
    //.addField("> Economy Extra Commands", "`store`")
    .setColor("GOLD")
    .setThumbnail("https://cdn.discordapp.com/avatars/804254260308082719/4f345b974bc5643d4886bfb4a67f2ed0.png?size=1024")
    message.channel.send(embed)




}

module.exports.help = {
  name:"help",
  aliases: [""]
}
