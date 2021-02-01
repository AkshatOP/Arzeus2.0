const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
  //if(!message.content.startsWith('e!'))return;  

  let user = message.mentions.members.first() || message.author;

  let money = await db.fetch(`money_${message.guild.id}_${user.id}`)
  if (money === null) money = 0;

  let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;

  let vip = await db.fetch(`giratina_${message.guild.id}_${user.id}`)
    if(vip === null) vip = 'None'
    if(vip === true) vip = '<@&804991402525327420>'

  let giratina = await db.fetch(`giratina_${message.guild.id}_${user.id}`)
  if(giratina === null) giratina = '<:arzeus_cross:804612025379586058>'
  
  let palkia = await db.fetch(`palkia_${message.guild.id}_${user.id}`)
  if(palkia === null) palkia = '<:arzeus_cross:804612025379586058>'
  
  let dialga = await db.fetch(`dialga_${message.guild.id}_${user.id}`)
  if(dialga === null) dialga = '<:arzeus_cross:804612025379586058>'
  
  let shoes = await db.fetch(`shoes_${message.guild.id}_${user.id}`)
  if(shoes === null) shoes = '0'
  
  let tshirt = await db.fetch(`tshirt_${message.guild.id}_${user.id}`)
  if(tshirt === null) tshirt = '0'
  
  let designersuit = await db.fetch(`designersuit_${message.guild.id}_${user.id}`)
  if(designersuit === null) designersuit = '0'

  let car = await db.fetch(`car_${message.guild.id}_${user.id}`)
  if(car === null) car = '0'

  let house = await db.fetch(`house_${message.guild.id}_${user.id}`)
  if(house === null) house = '0'
  
  let hamster = await db.fetch(`hamster_${message.guild.id}_${user.id}`)
  if(hamster === null) hamster = '0'
  
  let fish = await db.fetch(`fish_${message.guild.id}_${user.id}`)
  if(fish === null) fish = '0'
  
  let cat = await db.fetch(`cat_${message.guild.id}_${user.id}`)
  if(cat === null) cat = '0'
  
  let dog = await db.fetch(`dog_${message.guild.id}_${user.id}`)
  if(dog === null) dog = '0'

  let moneyEmbed = new Discord.MessageEmbed()
  .setColor("GOLD")
  .setDescription(`**${user}'s Profile**\n\nWallet: ${money} <:arzeus_coin:804370629654347788>\nBank: ${bank} <:arzeus_coin:804370629654347788>\n**VIP Roles**\n\nGiratina: ${giratina}\nPalkia: ${palkia}\nDialga: ${dialga}\n\n**Inventory**\n\nShoes: ${shoes}\nCars: ${car}\nHouses: ${house}\nT-Shirts: ${tshirt}\nSuits: ${designersuit}\n\n**PETS**\n\nHamsters: ${hamster}\nFishes: ${fish}\nCats: ${cat}\nDogs: ${dog}`)
  .setThumbnail(user.AvatarURL)
  message.channel.send(moneyEmbed)
};

module.exports.help = {
  name:"profile",
  aliases: ["pf"]
}
