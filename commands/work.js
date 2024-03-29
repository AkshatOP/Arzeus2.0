const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
    //if(!message.content.startsWith('e!'))return;  

    let user = message.author;
    let author = await db.fetch(`work_${message.guild.id}_${user.id}`)

    let timeout = 600000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("GOLD")
        .setDescription(`<a:cross:805816169973809203> You have already worked recently\n\nTry again in ${time.minutes}m ${time.seconds}s `);
        message.channel.send(timeEmbed)
      } else {

        let replies = ['Programmer','Builder','Waiter','Conductor','Chief','Mechanic','Bot Developer','Musician','magician']

        let result = Math.floor((Math.random() * replies.length));
        let amount = Math.floor(Math.random() * 550) + 1;
        let embed1 = new Discord.MessageEmbed()
        .setColor("GOLD")
        .setDescription(`<a:tick:805814130304483358> You worked as a ${replies[result]} and earned ${amount} <:arzeus_coin:804370629654347788>`);
        message.channel.send(embed1)
        
        db.add(`money_${message.guild.id}_${user.id}`, amount)
        db.set(`work_${message.guild.id}_${user.id}`, Date.now())
    };
}



module.exports.help = {
  name:"work",
  aliases: ["wr"]
}
