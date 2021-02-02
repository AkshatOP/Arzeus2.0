const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    //if(!message.content.startsWith('e!'))return;  


    let embed = new Discord.MessageEmbed()
    //.setDescription("**VIP Roles**\n\nGIRATINA: 3500 Coins\nDIALGA: COINS\nPALKIA: COINS\n\n**Lifestyle Items**\n\nShoes: 600 [m!buy nikes]\nCar: 800 [m!buy car]\nMansion: 1200 [m!buy mansion]")
    .setTitle("**__SHOP:-__**")
    .setDescription("•────────────────────────────•\n**VIP Roles**\n`By buying these you will get a new role for yourself`\n•────────────────────────────•\n**GIRATINA Role:**\n`Az!buy giratina` **Price => 30K** <:arzeus_coin:804370629654347788>\n**PALKIA Role:**\n`Az!buy palkia` **Price => 40K** <:arzeus_coin:804370629654347788>\n**DIALGA Role:**\n`Az!buy dialga` **Price => 50K** <:arzeus_coin:804370629654347788>\n•────────────────────────────•\n**SERVER SHOP**\n`Some of our perks related to our server shop :D`\n**SNIPE PASS(1 WEEK):**\n`Az!buy snipe_pass` **Price => 90K**  <:arzeus_coin:804370629654347788>\n**SPAM PASS(1 WEEK):**\n`Az!buy spam_pass` **Price => 80K** <:arzeus_coin:804370629654347788>\n•────────────────────────────•\n**__LIFESTYLES__**\n`Some stuff related to your lifestyle`\n**SHOES:**\n`Az!buy shoes` **Price => 1K** <:arzeus_coin:804370629654347788>\n**T-SHIRT:**\n`Az!buy t-shirt` **Price => 3K** <:arzeus_coin:804370629654347788>\nDESIGNER_SUIT: 6K <:arzeus_coin:804370629654347788>\n**HOUSE:**\n`Az!buy house` **Price => 40K** <:arzeus_coin:804370629654347788>\n**CAR:**\n`Az!buy car` **Price => 20K** <:arzeus_coin:804370629654347788>\n•────────────────────────────•\n**PETS**\n`Pets` :elephant:\n**HAMSTER:**`Az!buy hamster` **Price => 2K** <:arzeus_coin:804370629654347788>\n**FISH:**\n`Az!buy fish` **Price => 4K** <:arzeus_coin:804370629654347788>\n**CAT:** `Az!buy cat` **Price => 6K** <:arzeus_coin:804370629654347788>\n**DOG:**\n`Az!buy dog` **Price => 10K** <:arzeus_coin:804370629654347788>•────────────────────────────•")
    .setColor("GOLD")
    .setImage("https://cdn.discordapp.com/attachments/735352832701759560/737667554406825994/ars.gif")
    .setThumbnail("https://cdn.discordapp.com/avatars/804254260308082719/4f345b974bc5643d4886bfb4a67f2ed0.png?size=1024")
    .setFooter("Type Az!buy <itemname> to buy that item")
    message.channel.send(embed)




}


module.exports.help = {
  name:"store",
  aliases: ["shop"]
}
