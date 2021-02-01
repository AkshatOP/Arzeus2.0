const Discord = require('discord.js')
const db = require('quick.db')

let tick = `<:arzeus_tick:804612374518169620>`

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
        db.set(`giratina_${message.guild.id}_${user.id}`, tick)
      
       message.member.roles.add("804991402525327420").catch((e) => console.log(e));



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
      
      
      //PALKIA//
      
      
      
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
      
      
      //DIALGA//
      
      
    } else if(args[0] == 'dialga') {
      
      
        let Embed2 = new Discord.MessageEmbed()
        .setColor("GOLD") 
      .setDescription(`<:arzeus_cross:804612025379586058> You need 50K <:arzeus_coin:804370629654347788> to purchase <@&805087273040609292> role`);


        if (author < 50000) return message.channel.send(Embed2)
       
        db.fetch(`dialga_${message.guild.id}_${user.id}`)
        db.set(`dialga_${message.guild.id}_${user.id}`, true)
      
       message.member.roles.add("805087273040609292").catch((e) => console.log(e));

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
      
      
      //CAR//
      
      
     } else if(args[0] == 'car') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("GOLD")
        .setDescription(`<:arzeus_cross:804612025379586058> You need 20000 <:arzeus_coin:804370629654347788> to purchase a new car`);

        if (author < 20000) return message.channel.send(Embed2)
       
        db.fetch(`car_${message.guild.id}_${user.id}`)
        db.add(`car_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("GOLD")
        .setDescription(`<:arzeus_tick:804612374518169620> Purchased a New Car For 20000 <:arzeus_coin:804370629654347788>`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 20000)
        message.channel.send(Embed3)
       
       
        //HOUSE//
       
         } else if(args[0] == 'house') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("GOLD")
        .setDescription(`<:arzeus_cross:804612025379586058> You need 40000 <:arzeus_coin:804370629654347788> to purchase a new house`);

        if (author < 40000) return message.channel.send(Embed2)
       
        db.fetch(`house_${message.guild.id}_${user.id}`)
        db.add(`house_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("GOLD")
        .setDescription(`<:arzeus_tick:804612374518169620> Purchased a New House For 40000 <:arzeus_coin:804370629654347788>`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 40000)
        message.channel.send(Embed3)
           
           
           //DESIGNER SUIT//
           
            } else if(args[0] == 'designer_suit') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("GOLD")
        .setDescription(`<:arzeus_cross:804612025379586058> You need 6000 <:arzeus_coin:804370629654347788> to purchase a new house`);

        if (author < 6000) return message.channel.send(Embed2)
       
        db.fetch(`designersuit_${message.guild.id}_${user.id}`)
        db.add(`designersuit_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("GOLD")
        .setDescription(`<:arzeus_tick:804612374518169620> Purchased a Designer-Suit For 40000 <:arzeus_coin:804370629654347788>`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 6000)
        message.channel.send(Embed3)
              
              
              //T-SHIRT//
              
               } else if(args[0] == 't-shirt') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("GOLD")
        .setDescription(`<:arzeus_cross:804612025379586058> You need 3000 <:arzeus_coin:804370629654347788> to purchase a new house`);

        if (author < 6000) return message.channel.send(Embed2)
       
        db.fetch(`tshirt_${message.guild.id}_${user.id}`)
        db.add(`tshirt_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("GOLD")
        .setDescription(`<:arzeus_tick:804612374518169620> Purchased a New T-shirt For 3000 <:arzeus_coin:804370629654347788>`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 3000)
        message.channel.send(Embed3)
                 
                 
                 //SHOES//
                 
                  
               } else if(args[0] == 'shoes') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("GOLD")
        .setDescription(`<:arzeus_cross:804612025379586058> You need 1000 <:arzeus_coin:804370629654347788> to purchase a new house`);

        if (author < 1000) return message.channel.send(Embed2)
       
        db.fetch(`shoes_${message.guild.id}_${user.id}`)
        db.add(`shoes_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("GOLD")
        .setDescription(`<:arzeus_tick:804612374518169620> Purchased a pair of shoes For 1000 <:arzeus_coin:804370629654347788>`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed3)
           
           
      //HAMSTER//
                 
                 
                    } else if(args[0] == 'hamster') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("GOLD")
        .setDescription(`<:arzeus_cross:804612025379586058> You need 2000 <:arzeus_coin:804370629654347788> to purchase a new hamster`);

        if (author < 2000) return message.channel.send(Embed2)
       
        db.fetch(`hamster_${message.guild.id}_${user.id}`)
        db.add(`hamster_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("GOLD")
        .setDescription(`<:arzeus_tick:804612374518169620> Purchased a new hamster For 2000 <:arzeus_coin:804370629654347788>`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 2000)
        message.channel.send(Embed3)
           
                      
                      
                      //FISH//
                      
                        } else if(args[0] == 'fish') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("GOLD")
        .setDescription(`<:arzeus_cross:804612025379586058> You need 4000 <:arzeus_coin:804370629654347788> to purchase a new aquarium with fishes`);

        if (author < 4000) return message.channel.send(Embed2)
       
        db.fetch(`fish_${message.guild.id}_${user.id}`)
        db.add(`fish_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("GOLD")
        .setDescription(`<:arzeus_tick:804612374518169620> Purchased an aquarium with fishes For 4000 <:arzeus_coin:804370629654347788>`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 4000)
        message.channel.send(Embed3)
                          
                          
                          //DOG//
                          
                          
                            } else if(args[0] == 'dog') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("GOLD")
        .setDescription(`<:arzeus_cross:804612025379586058> You need 10000 <:arzeus_coin:804370629654347788> to purchase a new Dog`);

        if (author < 10000) return message.channel.send(Embed2)
       
        db.fetch(`dog_${message.guild.id}_${user.id}`)
        db.add(`dog_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("GOLD")
        .setDescription(`<:arzeus_tick:804612374518169620> Purchased a new Dog For 10000 <:arzeus_coin:804370629654347788>`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 10000)
        message.channel.send(Embed3)
                              
                              
                              //CAT//
                              
                              
                                } else if(args[0] == 'cat') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("GOLD")
        .setDescription(`<:arzeus_cross:804612025379586058> You need 1000 <:arzeus_coin:804370629654347788> to purchase a new Cat`);

        if (author < 6000) return message.channel.send(Embed2)
       
        db.fetch(`cat_${message.guild.id}_${user.id}`)
        db.add(`cat_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("GOLD")
        .setDescription(`<:arzeus_tick:804612374518169620> Purchased a pair of shoes For 6000 <:arzeus_coin:804370629654347788>`);

        db.subtract(`money_${message.guild.id}_${user.id}`, 6000)
        message.channel.send(Embed3)
                 
                 
                 
    } else if(args[0] == 'snipe_pass') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("GOLD")
        .setDescription(`<:arzeus_cross:804612025379586058> You need 90000 <:arzeus_coin:804370629654347788> to purchase a Snipe pass for a week`);

        if (author < 90000) return message.channel.send(Embed2)
       
        db.fetch(`snipepass_${message.guild.id}_${user.id}`)
        db.set(`snipepass_${message.guild.id}_${user.id}`, true)
      
      message.member.roles.add("805265307785887775").catch((e) => console.log(e));

        let Embed4 = new Discord.MessageEmbed()
        .setColor("GOLD")
         .setDescription(`<:arzeus_tick:804612374518169620>| ${user} Purchased Snipe pass(1 week) For 90K <:arzeus_coin:804370629654347788>\n The role <@&805265307785887775> has been added to ${user}.`);  

        db.subtract(`money_${message.guild.id}_${user.id}`, 90000)
        message.channel.send(Embed4)
      
      
       let embed94 = new Discord.MessageEmbed()
    .setColor('GOLD')
    .setTitle(`**__ITEM BOUGHT__**`)
    .setDescription(`${user} has bought the <@&805265307785887775> role`)
    .setThumbnail(user.avatarURL())
    .addField(`Bought Date - ${message.createdAt}`)
    .setTimestamp()
   

  let sChannel = message.guild.channels.cache.find((c) => c.name === "logs" )
  sChannel.send(embed94);
      
      
       } else if(args[0] == 'spam_pass') {
         let Embed2 = new Discord.MessageEmbed()
        .setColor("GOLD")
        .setDescription(`<:arzeus_cross:804612025379586058>| You need 80000 <:arzeus_coin:804370629654347788> to purchase a Spam pass for a week`);

        if (author < 80000) return message.channel.send(Embed2)
       
        db.fetch(`spampass_${message.guild.id}_${user.id}`)
        db.set(`spampass_${message.guild.id}_${user.id}`, true)
      
      message.member.roles.add("805303705590693939").catch((e) => console.log(e));

        let Embed5 = new Discord.MessageEmbed()
        .setColor("GOLD")
         .setDescription(`<:arzeus_tick:804612374518169620>| ${user} Purchased Snipe pass(1 week) For 80K <:arzeus_coin:804370629654347788>\n The role <@&805303705590693939> has been added to ${user}.`);  

        db.subtract(`money_${message.guild.id}_${user.id}`, 80000)
        message.channel.send(Embed5)
      
      
       let embed95 = new Discord.MessageEmbed()
    .setColor('GOLD')
    .setTitle(`**__ITEM BOUGHT__**`)
    .setDescription(`${user} has bought the <@&805303705590693939> role`)
    .setThumbnail(user.avatarURL())
    .addField(`Bought Date - ${message.createdAt}`)
    .setTimestamp()
   

  let sChannel = message.guild.channels.cache.find((c) => c.name === "logs" )
  sChannel.send(embed95);
         
         
              } else if(args[0] == 'spam_pass') {
         let Embed2 = new Discord.MessageEmbed()
        .setColor("GOLD")
        .setDescription(`<:arzeus_cross:804612025379586058>| You need 250000 <:arzeus_coin:804370629654347788> to purchase owner respect role`);

        if (author < 250000) return message.channel.send(Embed2)
       
        db.fetch(`ownerresprectrole_${message.guild.id}_${user.id}`)
        db.set(`ownerrespectrole_${message.guild.id}_${user.id}`, true)
      
      message.member.roles.add("805305458628886528").catch((e) => console.log(e));

        let Embed6 = new Discord.MessageEmbed()
        .setColor("GOLD")
         .setDescription(`<:arzeus_tick:804612374518169620>| ${user} Purchased Owner Respect Role For 250K <:arzeus_coin:804370629654347788>\n The role <@&805305458628886528> has been added to ${user}.`);  

        db.subtract(`money_${message.guild.id}_${user.id}`, 250000)
        message.channel.send(Embed6)
      
      
       let embed96 = new Discord.MessageEmbed()
    .setColor('GOLD')
    .setTitle(`**__ITEM BOUGHT__**`)
    .setDescription(`${user} has bought the <@&805305458628886528> role`)
    .setThumbnail(user.avatarURL())
    .addField(`Bought Date - ${message.createdAt}`)
    .setTimestamp()
   

  let sChannel = message.guild.channels.cache.find((c) => c.name === "logs" )
  sChannel.send(embed96);
      
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
