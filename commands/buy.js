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
      
      
       let embed90 = new Discord.MessageEmbed()
    .setColor('GOLD')
    .setTitle(`**__ITEM BOUGHT__**`)
    .setDescription(`${user} has bought the <@&804991402525327420> role`)
    .setThumbnail(user.avatarURL())
    .addField(`Bought Date - ${message.createdAt}`)
    .setTimestamp()
   

  let sChannel = message.guild.channels.cache.find((c) => c.name === "logs" )
  sChannel.send(embed90); 
      
      
    } else if(args[0] == 'palkia') {
        let Embed2 = new Discord.MessageEmbed()

        .setColor('GOLD')
        .setDescription(`<:arzeus_cross:804612025379586058> You need 40K <:arzeus_coin:804370629654347788> to purchase <@&805087249167155220> role`);

        if (author < 40000) return message.channel.send(Embed2)
       
        db.fetch(`palkia_${message.guild.id}_${user.id}`)
      //  db.add(`palkia_${message.guild.id}_${user.id}`, 1)
        db.set(`palkia_${message.guild.id}_${user.id}`, true)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("GOLD")
        
        .setDescription(`<:arzeus_tick:804612374518169620>| ${user} Purchased palkia role For 40K <:arzeus_coin:804370629654347788>\n The role <@&805087249167155220> has been added to ${user}.`);  
      
        db.subtract(`money_${message.guild.id}_${user.id}`, 4)
        message.channel.send(Embed3)
      
      
      
    } else if(args[0] == 'car') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<:arzeus_cross:804612025379586058> You need 800 <:arzeus_coin:804370629654347788> to purchase a new car`);

        if (author < 800) return message.channel.send(Embed2)
       
        db.fetch(`car_${message.guild.id}_${user.id}`)
        db.add(`car_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<:arzeus_tick:804612374518169620> Purchased a New Car For 800 <:arzeus_coin:804370629654347788>`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 800)
        message.channel.send(Embed3)
    } else if(args[0] == 'mansion') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<:arzeus_cross:804612025379586058> You need 1200 <:arzeus_coin:804370629654347788> to purchase a Mansion`);

        if (author < 1200) return message.channel.send(Embed2)
       
        db.fetch(`house_${message.guild.id}_${user.id}`)
        db.add(`house_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<:arzeus_tick:804612374518169620> Purchased a Mansion For 1200 <:arzeus_coin:804370629654347788>`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 1200)
        message.channel.send(Embed3)
    } else {
        let embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription('<:arzeus_cross:804612025379586058>Enter an item to buy')
        message.channel.send(embed3)
    }

}
  
  module.exports.help = {
    name:"buy",
    aliases: [""]
  }
