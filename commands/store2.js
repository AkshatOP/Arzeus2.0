const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    //if(!message.content.startsWith('e!'))return;  


    let embed = new Discord.MessageEmbed()
    //.setDescription("**VIP Roles**\n\nGIRATINA: 3500 Coins\nDIALGA: COINS\nPALKIA: COINS\n\n**Lifestyle Items**\n\nShoes: 600 [m!buy nikes]\nCar: 800 [m!buy car]\nMansion: 1200 [m!buy mansion]")
    .setTitle("**__ITEMS IN SHOP__**")
    .setDescription("**VIP Roles**\n\nGIRATINA: 30000 Coins\nDIALGA: COINS\nPALKIA: COINS\n\n**SERVER SHOP**\n\nSNIPE PASS: 70K (1 WEEK)\nSPAM PASS - 90K (1 WEEK)\nOWNERS RESPECT ROLE - 100K (PERMANENT)")
    .setColor("GOLD")
    message.channel.send(embed)




}


module.exports.help = {
  name:"store2",
  aliases: ["st2"]
}
