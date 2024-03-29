const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  //if(!message.content.startsWith('e!'))return;  

  let user = message.author;

  let member = db.fetch(`money_${message.guild.id}_${user.id}`)
  let member2 = db.fetch(`bank_${message.guild.id}_${user.id}`)

  if (args[0] == 'all') {
    let money = await db.fetch(`bank_${message.guild.id}_${user.id}`)
    
    db.subtract(`bank_${message.guild.id}_${user.id}`, money)
    db.add(`money_${message.guild.id}_${user.id}`, money)
    let embed5 = new Discord.MessageEmbed()
  .setColor("GOLD")
  .setDescription(`<a:tick:805814130304483358>| You have withdrawn all your coins from your bank`);
  message.channel.send(embed5)
  
  } else   if (args[0] == 'max') {
    let money = await db.fetch(`bank_${message.guild.id}_${user.id}`)
    
    db.subtract(`bank_${message.guild.id}_${user.id}`, money)
    db.add(`money_${message.guild.id}_${user.id}`, money)
    let embed5 = new Discord.MessageEmbed()
  .setColor("GOLD")
  .setDescription(`<a:tick:805814130304483358>| You have withdrawn all your coins from your bank`);
  message.channel.send(embed5)
 
  
  } else {

  let embed2 = new Discord.MessageEmbed()
  .setColor("GOLD")
  .setDescription(`<a:cross:805816169973809203>| Specify an amount to withdraw`);
  
  if (!args[0]) {
      return message.channel.send(embed2)
  }
  let embed3 = new Discord.MessageEmbed()
  .setColor("GOLD")
  .setDescription(`<a:cross:805816169973809203>| You can't withdraw negative money`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("GOLD")
  .setDescription(`<a:cross:805816169973809203>| You don't have that much money in the bank`);

  if (member2 < args[0]) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("GOLD")
  .setDescription(`<a:tick:805814130304483358>|You have withdrawn ${args[0]} <:arzeus_coin:804370629654347788> from your bank`);

  message.channel.send(embed5)
  db.subtract(`bank_${message.guild.id}_${user.id}`, args[0])
  db.add(`money_${message.guild.id}_${user.id}`, args[0])
  }
}


module.exports.help = {
  name:"withdraw",
  aliases: ["wd"]
}
