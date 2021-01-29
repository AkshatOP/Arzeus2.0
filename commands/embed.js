const Discord = require("discord.js");

/*module.exports = {
	name: 'embed',
	description: 'embed cmd',
	execute(bot, message , args ) {*/

//execute: async (client, message, args) => {

  //if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`❌ | `+`You Require Manage Messages Permission to use this Command`)

// await  message.delete()

module.exports.run = async (bot, message, args) => {    


   let color = message.content.split(" ").slice(1).join(" ")
  
  let title = color.split(" ").slice(1).join(" ")
    
 
  let say = title.split(" ").slice(1).join(" ")

  if(!say) return message.channel.send(`❌ | `+"I Cannot Repeat Blank Message")
  
  
  
  

  let embed = new Discord.MessageEmbed()

  .setTitle(title || null)

  .setDescription(`${say}`)

  .setColor(color)

//.setFooter(`Embed by:- ${message.author}`)

//.setTimestamp()

  message.channel.send(embed)

  message.delete()

};

module.exports.help = {
  name:"embed",
  aliases: ["emb"]
}
  
