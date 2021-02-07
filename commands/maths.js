const Discord = require("discord.js");
const math = require('discord-math');
const db = require('quick.db')

module.exports.run = async (bot, message, args) =>{
  
  //check if the setup server is the message send server
  //let channelId = db.get(`mathchannel_${message.guild.id}`);
  //if(!channelId) return message.channel.send(`Math channel is not setup`)
  //if(channelId !== message.channel.id) return message.reply(`Math command wont work here!!`) //is not then reurn this message
  
  //if its the setup channel then do its work :)
  
            let num1 = Number(args[0]);
            let operation = args[1];
            let num2 = Number(args[2]);
            
            if (!num1) return message.channel.send('First Number needs to be specified!');
            if (!operation) return message.channel.send('An operation / sign was not specified!');
            if (!num2) return message.channel.send('Second Number needs to be specified!');
 
            // message.channel.send(`Answer: ${math.calculate(num1, operation, num2)}`);
  

 const Embed = new Discord.MessageEmbed()
  .setTitle(`Maths OP`)
  .addField(`Question : ${args.slice(0).join(" ")}`, `Answer: ${math.calculate(num1, operation, num2)} `) // + number1 + randomSign + number2
  
   message.channel.send(Embed);
 
  
 
  
}


module.exports.help ={
    name: "math",
    aliases: ["calculate"]
}