const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
  //   if(!message.content.startsWith('e!'))return;  

    let user = message.author;

    let author = db.fetch(`money_${message.guild.id}_${user.id}`)

    let Embed = new Discord.MessageEmbed()
    .setColor("GOLD")
    .setDescription(`<:arzeus_cross:804612025379586058> You need 30000 <:arzeus_coin:804370629654347788> to purchase Giratina role`);

    if (args[0] == 'giratina') {
        if (author < 30000) return message.channel.send(Embed)
        
        db.fetch(`giratina_${message.guild.id}_${user.id}`);
        db.set(`giratina_${message.guild.id}_${user.id}`, true)
      
       message.member.roles.add("804991402525327420").catch((e) => console.log(e));
    message.channel.send(
      `The role <@&804991402525327420> has been added to ${user}.`
    );
      
      let embed90 = new Discord.MessageEmbed()
    .setColor('GOLD')
    .setTitle(`**__ITEM BOUGHT__**`)
    .setDescription(`${user} has bought the <@&804991402525327420> role`)
    .setThumbnail(user.avatarURL())
    embed90.setFooter("Date:", message.createdAt)
  //  .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
    //.addField("Moderation:", "Addrole")
    //.addField("Mute:", user.user.username)
    //.addField("Reason:", reason)
    //.addField("Date:", message.createdAt); // `.toLocaleString()` isn't required, discord automatically coonverts it to string.

  let sChannel = message.guild.channels.cache.find((c) => c.name === "logs" )
  sChannel.send(embed90);



        let Embed2 = new Discord.MessageEmbed()
        .setColor("GOLD")
        .setDescription(`<:arzeus_tick:804612374518169620> Purchased giratina For 30K <:arzeus_coin:804370629654347788>`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 30000)
        message.channel.send(Embed2)
    } else if(args[0] == 'nikes') {
        let Embed2 = new Discord.MessageEmbed()

        .setColor("#FFFFFF")
        .setDescription(`<:arzeus_cross:804612025379586058> You need 600 <:arzeus_coin:804370629654347788> to purchase some Nikes`);

        if (author < 600) return message.channel.send(Embed2)
       
        db.fetch(`nikes_${message.guild.id}_${user.id}`)
        db.add(`nikes_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<:arzeus_tick:804612374518169620> Purchased Fresh Nikes For 600 <:arzeus_coin:804370629654347788>`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 600)
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
    name:"buy2",
    aliases: [""]
  }
