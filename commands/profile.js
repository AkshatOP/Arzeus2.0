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

  let shoes = await db.fetch(`shoes_${message.guild.id}_${user.id}`)
  if(shoes === null) shoes = '0'
  
  let tshirt = await db.fetch(`tshirt_${message.guild.id}_${user.id}`)
  if(tshirt === null) tshirt = '0'

  let car = await db.fetch(`car_${message.guild.id}_${user.id}`)
  if(car === null) car = '0'

  let house = await db.fetch(`house_${message.guild.id}_${user.id}`)
  if(house === null) house = '0'

  let moneyEmbed = new Discord.MessageEmbed()
  .setColor("GOLD")
  .setDescription(`**${user}'s Profile**\n\nWallet: ${money} <:arzeus_coin:804370629654347788>\nBank: ${bank} <:arzeus_coin:804370629654347788>\nVIP Roles: ${vip}\n\n**Inventory**\n\nShoes: ${shoes}\nCars: ${car}\nHouses: ${house}\nT-Shirts: ${tshirt}`);
  message.channel.send(moneyEmbed)
};

module.exports.help = {
  name:"profile",
  aliases: ["pro"]
}
