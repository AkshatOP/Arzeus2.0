const Discord = require("discord.js");


	module.exports.run = async (bot, message, args) => {
    
 let ownerID = ['785725873851990017' , '721675303486750730']
 if(ownerID.includes(message.author.id)){ 
      let user =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]);
      if (!user)
        return message.channel.send(
          `You did not mention a user, or you gave an invalid id`
        );
      if (!args.slice(1).join(" "))
        return message.channel.send("You did not specify your message");
  
  const dmmessage = new Discord.MessageEmbed()
  .setTitle(`You got dmed!!`)
  //.setDescription(`Sender: ${message.author.username} \nMessage: ${args.slice(1).join(" ")}`)
  .setDescription(`${args.slice(1).join(" ")}`) 
  .setFooter(message.guild.name)
  .setTimestamp()
      user.user.send(dmmessage)
        // .catch(() => message.channel.send("That user could not be DMed!"))
        .then(() => message.channel.send(`Sent a message to ${user.user.tag}`));
    }
  }
    
 module.exports.help = {
  name:"dm",
  aliases: ["DM"]
}


