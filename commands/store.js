const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    //if(!message.content.startsWith('e!'))return;  


    let embed = new Discord.MessageEmbed()
    //.setDescription("**VIP Roles**\n\nGIRATINA: 3500 Coins\nDIALGA: COINS\nPALKIA: COINS\n\n**Lifestyle Items**\n\nShoes: 600 [m!buy nikes]\nCar: 800 [m!buy car]\nMansion: 1200 [m!buy mansion]")
    .setTitle("**__ITEMS IN SHOP__**")
    .setDescription("**VIP Roles**\n\nGIRATINA: 30K <:arzeus_coin:804370629654347788>\nPALKIA: 40K <:arzeus_coin:804370629654347788>\nDIALGA: 50K <:arzeus_coin:804370629654347788>\n\n**SERVER SHOP**\n\nSNIPE PASS(1 WEEK): 90K  <:arzeus_coin:804370629654347788>\nSPAM PASS(1 WEEK) - 80K <:arzeus_coin:804370629654347788>\nOWNERS RESPECT ROLE(PERMANENT) - 250K <:arzeus_coin:804370629654347788>")
    .setColor("GOLD")
    message.channel.send(embed)




}


module.exports.help = {
  name:"store",
  aliases: ["st"]
}
