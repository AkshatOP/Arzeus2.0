  
const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("parse-ms")

exports.run = async (bot, message, args) => {


    let user = message.mentions.members.first()
    let targetuser = await db.fetch(`money_${message.guild.id}_${user.id}`) // fetch mentioned users balance
    let author = await db.fetch(`money_${message.guild.id}_${message.author.id}`) // fetch authors balance
    let author2 = await db.fetch(`rob_${message.guild.id}_${message.author.id}`)//fetch last robbed

    
   
      
    
    let timeout = 600000;

if (author2 !== null && timeout - (Date.now() - author2) > 0) {
    let time = ms(timeout - (Date.now() - author2));

    let timeEmbed = new Discord.MessageEmbed()
    .setColor("GOLD")
    .setDescription(`<a:cross:805816169973809203>| You have already robbed someone\n\nTry again in ${time.minutes}m ${time.seconds}s `);
    message.channel.send(timeEmbed)
  } else {
    
    
    if (author < 250) { // if the authors balance is less than 250, return this.
        return message.channel.send('<a:cross:805816169973809203>| You need atleast 250 <:arzeus_coin:804370629654347788> to rob somebody.')
    }

    if (targetuser < 1) { // if mentioned user has 0 or less, it will return this.
        return message.channel.send(`<a:cross:805816169973809203>| ${user.user.username} does not have anything to rob.`)
    }
    
  


    let random = Math.floor(Math.random() * 500) + 1; // random number 200-1, you can change 200 to whatever you'd like


    let embed = new Discord.MessageEmbed()
    .setDescription(`<a:tick:805814130304483358>| ${message.author} you robbed ${user} and got away with ${random} <:arzeus_coin:804370629654347788>!`)
    .setColor("GOLD")
    .setTimestamp()
    message.channel.send(embed)


    db.subtract(`money_${message.guild.id}_${user.id}`, random)
    db.add(`money_${message.guild.id}_${message.author.id}`, random)
    db.set(`rob_${message.guild.id}_${message.author.id}`, Date.now())
}
    }

    

module.exports.help = {
  name:"rob",
  aliases: ["steal"]
}
