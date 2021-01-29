const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (bot, message, args) => {
  
 if (!args[0]) return message.reply('Enter a valid amount');

 if (!message.member.permissions.has('ADMINISTRATOR')) {
  return message.reply(`You can't use the command`);
 }

 let user = message.mentions.roles.first();
 if (isNaN(args[1])) return;
 db.add(`money_${message.guild.id}_${user.id}`, args[1]);

 let moneyEmbed = new Discord.MessageEmbed()
  .setColor('GOLD')
  .setDescription(
   `✅ | ${user.id} has been given ${args[1]} <:arzeus_coin:804370629654347788>.`
  );
 message.channel.send(moneyEmbed);
};

module.exports.help = {
 name: 'addmoney',
 aliases: ['am'],
};