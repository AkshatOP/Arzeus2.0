const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
  //if(!message.content.startsWith('e!'))return;  
   let ownerID = ['785725873851990017' , '721675303486750730']
 if(ownerID.includes(message.author.id)){ 


  
  let user = message.mentions.members.first() || message.author;

    if (isNaN(args[1])) return;
    db.subtract(`money_${message.guild.id}_${user.id}`, args[1])
    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)

    let moneyEmbed = new Discord.MessageEmbed()
    .setColor("GOLD")
    .setDescription(`<a:tick:805814130304483358>| Removed ${args[1]} <:arzeus_coin:804370629654347788>\n\nNew Balance: ${bal} <:arzeus_coin:804370629654347788>`);
    message.channel.send(moneyEmbed)
 }
};


module.exports.help = {
  name:"removemoney",
  aliases: ["rm","remove"]
}
