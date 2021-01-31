const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
  //   if(!message.content.startsWith('e!'))return;  

    let user = message.author;

    let author = db.fetch(`money_${message.guild.id}_${user.id}`)

    let Embed = new Discord.MessageEmbed()
    .setColor("GOLD")
    .setDescription(`<:arzeus_cross:804612025379586058> You need 30000 <:arzeus_coin:804370629654347788> to purchase <@&804991402525327420> role`);

    if (args[0] == 'giratina') {
        if (author < 30000) return message.channel.send(Embed)
        
        db.fetch(`giratina_${message.guild.id}_${user.id}`);
        db.set(`giratina_${message.guild.id}_${user.id}`, true)
      
       message.member.roles.add("804991402525327420").catch((e) => console.log(e));
  //  message.channel.send(
    //  `The role <@&804991402525327420> has been added to ${user}.`
   // );
      
      



        let Embed2 = new Discord.MessageEmbed()
        .setColor("GOLD")
        .setDescription(`<:arzeus_tick:804612374518169620>| ${user} Purchased giratina role For 30K <:arzeus_coin:804370629654347788>\n The role <@&804991402525327420> has been added to ${user}.`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 30000)
        message.channel.send(Embed2)
      
      
       let embed91 = new Discord.MessageEmbed()
    .setColor('GOLD')
    .setTitle(`**__ITEM BOUGHT__**`)
    .setDescription(`${user} has bought the <@&804991402525327420> role`)
    .setThumbnail(user.avatarURL())
    .addField(`Bought Date - ${message.createdAt}`)
    .setTimestamp()
   

  let sChannel = message.guild.channels.cache.find((c) => c.name === "logs" )
  sChannel.send(embed91); 
      
      
    } else if(args[0] == 'palkia') {
        let Embed2 = new Discord.MessageEmbed()

        .setColor('GOLD')
        .setDescription(`<:arzeus_cross:804612025379586058> You need 40K <:arzeus_coin:804370629654347788> to purchase <@&805087249167155220> role`);

        if (author < 40000) return message.channel.send(Embed2)
       
        db.fetch(`palkia_${message.guild.id}_${user.id}`)
        db.set(`palkia_${message.guild.id}_${user.id}`, true)
      
      message.member.roles.add("805087249167155220").catch((e) => console.log(e));

        let Embed3 = new Discord.MessageEmbed()
        .setColor("GOLD")       
        .setDescription(`<:arzeus_tick:804612374518169620>| ${user} Purchased palkia role For 40K <:arzeus_coin:804370629654347788>\n The role <@&805087249167155220> has been added to ${user}.`);  
      
        db.subtract(`money_${message.guild.id}_${user.id}`, 40000)
        message.channel.send(Embed3)
      
      
      let embed92 = new Discord.MessageEmbed()
    .setColor('GOLD')
    .setTitle(`**__ITEM BOUGHT__**`)
    .setDescription(`${user} has bought the <@&805087249167155220> role`)
    .setThumbnail(user.avatarURL())
    .addField(`Bought Date - ${message.createdAt}`)
    .setTimestamp()
   

  let sChannel = message.guild.channels.cache.find((c) => c.name === "logs" )
  sChannel.send(embed92); 
      
      
    } else if(args[0] == 'dialga') {
      
      
        let Embed2 = new Discord.MessageEmbed()
        .setColor("GOLD") 
      .setDescription(`<:arzeus_cross:804612025379586058> You need 50K <:arzeus_coin:804370629654347788> to purchase <@&805087273040609292> role`);


        if (author < 50000) return message.channel.send(Embed2)
       
        db.fetch(`dialga_${message.guild.id}_${user.id}`)
        db.set(`dialga_${message.guild.id}_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("GOLD")
         .setDescription(`<:arzeus_tick:804612374518169620>| ${user} Purchased Dialga role For 50K <:arzeus_coin:804370629654347788>\n The role <@&805087273040609292> has been added to ${user}.`);  
 

        db.subtract(`money_${message.guild.id}_${user.id}`, 50000)
        message.channel.send(Embed3)
      
          let embed93 = new Discord.MessageEmbed()
    .setColor('GOLD')
    .setTitle(`**__ITEM BOUGHT__**`)
    .setDescription(`${user} has bought the <@&805087273040609292> role`)
    .setThumbnail(user.avatarURL())
    .addField(`Bought Date - ${message.createdAt}`)
    .setTimestamp()
   

  let sChannel = message.guild.channels.cache.find((c) => c.name === "logs" )
  sChannel.send(embed93);
      
      
      
    } else if(args[0] == 'snipe pass') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("GOLD")
        .setDescription(`<:arzeus_cross:804612025379586058> You need 90000 <:arzeus_coin:804370629654347788> to purchase a Snipe pass for a week`);

        if (author < 90000) return message.channel.send(Embed2)
       
        db.fetch(`snipepass_${message.guild.id}_${user.id}`)
        db.set(`snipepass_${message.guild.id}_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("GOLD")
         .setDescription(`<:arzeus_tick:804612374518169620>| ${user} Purchased Snipe pass(1 week) For 90K <:arzeus_coin:804370629654347788>\n The role <@&805265307785887775> has been added to ${user}.`);  

        db.subtract(`money_${message.guild.id}_${user.id}`, 90000)
        message.channel.send(Embed3)
      
      
       let embed94 = new Discord.MessageEmbed()
    .setColor('GOLD')
    .setTitle(`**__ITEM BOUGHT__**`)
    .setDescription(`${user} has bought the <@&805265307785887775> role`)
    .setThumbnail(user.avatarURL())
    .addField(`Bought Date - ${message.createdAt}`)
    .setTimestamp()
   

  let sChannel = message.guild.channels.cache.find((c) => c.name === "logs" )
  sChannel.send(embed94);
      
      
    } else {
        let embed3 = new Discord.MessageEmbed()
        .setColor("GOLD")
        .setDescription('<:arzeus_cross:804612025379586058>| Enter an item to buy')
        message.channel.send(embed3)
    }

}
  
  module.exports.help = {
    name:"buy",
    aliases: [""]
  }
