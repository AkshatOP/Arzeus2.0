const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args, utils) => {
//  if(!message.content.startsWith('Az!'))return;  

  let user = message.mentions.members.first() || message.author;

  let bal = db.fetch(`money_${message.guild.id}_${user.id}`)
  if (bal === null) bal = 0;

  let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;
  
  let networth = bal + bank;

  let moneyEmbed = new Discord.MessageEmbed()
  .setColor("GOLD")
  .setDescription(`**__${user}'s Balance__**\n\n> <a:fly_cash:805778411788173313>**Wallet:** ${bal} <:arzeus_coin:804370629654347788>\n\n> <a:moneyaabag:802503275085299752>**Bank:** ${bank} <:arzeus_coin:804370629654347788>\n\n> <a:golden_credit_card:805777673620160532>**NetWorth:** ${networth} <:arzeus_coin:804370629654347788>`);
  message.channel.send(moneyEmbed)
};

module.exports.help = {
  name:"balance",
  aliases: ["bal"]
}
