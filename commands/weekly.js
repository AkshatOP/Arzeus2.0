const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
 // if(!message.content.startsWith('e!'))return;  

  if(message.member.roles.cache.has("805808828897558528")){
   
  let user = message.author;
  let timeout = 604800000;
  let amount = 15000;

  let weekly = await db.fetch(`weekly_${message.guild.id}_${user.id}`);

  if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
    let time = ms(timeout - (Date.now() - weekly));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("GOLD")
    .setDescription(`<:arzeus_cross:804612025379586058>| You have already collected your weekly reward\n\nCollect it again in **${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s** `);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("GOLD")
  .setDescription(`<:arzeus_tick:804612374518169620>| You've collected your weekly reward of ${amount} <:arzeus_coin:804370629654347788>`);
  message.channel.send(moneyEmbed)
  db.add(`money_${message.guild.id}_${user.id}`, amount)
  db.set(`weekly_${message.guild.id}_${user.id}`, Date.now())


  }
} else {
  message.channel.send("boost us to use  command") 
  }
  };


module.exports.help = {
  name:"weekly",
  aliases: ["week"]
}
