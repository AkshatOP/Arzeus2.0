const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (bot, message, args) => {
  
 let ownerID = ['785725873851990017' , '721675303486750730']
 if(ownerID.includes(message.author.id)){ 
 
 if (!args[0]) return message.reply('Enter a valid amount');

 //if (!message.member.permissions.has('ADMINISTRATOR')) { return message.reply(`You can't use the command`); }

 //let user = message.mentions.roles.first();
 let user = message.mentions.members.first() || message.author;

  if (isNaN(args[1])) return;
 db.add(`money_${message.guild.id}_${user.id}`, args[1])
   let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)

 let moneyEmbed = new Discord.MessageEmbed()
  .setColor('GOLD')
  .setDescription(
   `<a:tick:805814130304483358> | ${user} has been given ${args[1]} <:arzeus_coin:804370629654347788>\n\nNew Balance: ${bal} <:arzeus_coin:804370629654347788>`
  );
 message.channel.send(moneyEmbed);
  }
  };

module.exports.help = {
 name: 'addmoney',
 aliases: ['am'],
};