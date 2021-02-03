const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
 // if(!message.content.startsWith('e!'))return;  

  if (message.member.roles.cache.has("801723375356739594")) {
  
  let user = message.author;

  let timeout = 86400000;
  let amount = 2000;

  let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);

  if (daily !== null && timeout - (Date.now() - daily) > 0) {
    let time = ms(timeout - (Date.now() - daily));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("GOLD")
    .setDescription(`<a:cross:805816169973809203>| You've already collected your daily reward\n\nCollect it again in ${time.hours}h ${time.minutes}m ${time.seconds}s `);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("GOLD")
  .setDescription(`<a:tick:805814130304483358>| You've collected your daily reward of ${amount} <:arzeus_coin:804370629654347788>`);
  message.channel.send(moneyEmbed)
  db.add(`money_${message.guild.id}_${user.id}`, amount)
  db.set(`daily_${message.guild.id}_${user.id}`, Date.now())


  }
} else {
  let notvote = new Discord.MessageEmbed()
  .setColor("GOLD")
  .setDescription("<a:cross:805816169973809203>| You can't use this command until you have voted the server. Vote us by typing `Az!vote`");
  message.channel.send(notvote)
}
}

module.exports.help = {
  name:"daily",
  aliases: ["day"]
}
