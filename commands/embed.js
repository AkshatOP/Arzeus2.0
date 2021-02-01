const Discord = require("discord.js");

/*module.exports = {
	name: 'embed',
	description: 'embed cmd',
	execute(bot, message , args ) {*/

//execute: async (client, message, args) => {

  //

// await  message.delete()

module.exports.run = async (bot, message, args) => {    

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`❌ | `+`You Require Manage Messages Permission to use this Command`)

  // let color = message.content.split(" ").slice(1).join(" ")
  
 // let title = message.content.split(" ").slice(1).join(" ")
    
 
  let say = message.content.split(" ").slice(1).join(" ")

  if(!say) return message.channel.send(`❌ | `+"I Cannot Repeat Blank Message")
  
  
  
  

  let embed = new Discord.MessageEmbed()

//  .setTitle(title || null)

  .setDescription(`${say}`)

  .setColor(`GOLD`)

//.setFooter(`Embed by:- ${message.author}`)

.setTimestamp()

  message.channel.send(embed)

  message.delete()

};

module.exports.help = {
  name:"embed",
  aliases: ["emb"]
}
  
