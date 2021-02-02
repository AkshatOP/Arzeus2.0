const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    //if(!message.content.startsWith('e!'))return;  


    let embed = new Discord.MessageEmbed()
    //.setDescription("**VIP Roles**\n\nGIRATINA: 3500 Coins\nDIALGA: COINS\nPALKIA: COINS\n\n**Lifestyle Items**\n\nShoes: 600 [m!buy nikes]\nCar: 800 [m!buy car]\nMansion: 1200 [m!buy mansion]")
    .setTitle("**__SHOP:-__**")
    .setDescription("•────────────────────────────•\n**VIP Roles**\n`By buying these you will get a new role for yourself`\n•────────────────────────────•\n**GIRATINA Role:**\n`Az!buy giratina` **Price => 30K** <:arzeus_coin:804370629654347788>\n**PALKIA Role:**\n`Az!buy palkia` **Price => 40K** <:arzeus_coin:804370629654347788>\n**DIALGA:**\n`Az!buy dialga` **Price => 50K** <:arzeus_coin:804370629654347788>\n•────────────────────────────•**SERVER SHOP**\n`Some of our perks relted to our server shop. They get updated so better grab them before they get refreshed :D`\nSNIPE PASS(1 WEEK): 90K  <:arzeus_coin:804370629654347788>\nSPAM PASS(1 WEEK): 80K <:arzeus_coin:804370629654347788>\n•────────────────────────────•\n**LIFESTYLES**\n`Some stuff related to your lifestyle`\n\nSHOES: 1K <:arzeus_coin:804370629654347788>\nT-SHIRT: 3K <:arzeus_coin:804370629654347788>\nDESIGNER_SUIT: 6K <:arzeus_coin:804370629654347788>\nHOUSE: 40K <:arzeus_coin:804370629654347788>\nCAR: 20K <:arzeus_coin:804370629654347788>\n\n**PETS**\n\nHAMSTER: 2K <:arzeus_coin:804370629654347788>\nFISH: 4K <:arzeus_coin:804370629654347788>\nCAT: 6K <:arzeus_coin:804370629654347788>\nDOG: 10K <:arzeus_coin:804370629654347788>")
    .setColor("GOLD")
    .setImage("https://cdn.discordapp.com/attachments/735352832701759560/737667554406825994/ars.gif")
    .setThumbnail("https://cdn.discordapp.com/avatars/804254260308082719/4f345b974bc5643d4886bfb4a67f2ed0.png?size=1024")
    message.channel.send(embed)




}


module.exports.help = {
  name:"store",
  aliases: ["shop"]
}
