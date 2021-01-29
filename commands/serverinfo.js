const { MessageEmbed } = require("discord.js")

const db = require('quick.db');
 

   module.exports.run = async (bot, message, args) => {
 
		
 
		const prefix = process.env.prefix;
     
 
		const text = message.guild.channels.cache.filter(r => r.type === "text").size
		const voice = message.guild.channels.cache.filter(r => r.type === "voice").size
		const chs = message.guild.channels.cache.size
		const avaibles = message.guild.features.map(features => features.toString()).join("\n")
 
		const roles = message.guild.roles.cache.size
 
        let owner = [];
        await bot.users.fetch(message.guild.ownerID).then(o => owner.push(o.tag))
        try {
            let embed = new MessageEmbed()
				embed.setAuthor(message.guild.name, message.guild.iconURL())
        embed.setColor("GOLD")
        embed.setDescription(`**Server Owner** - <@785725873851990017> & <@705408504156127273> \n
                **Server CO-Owner** - <@721675303486750730> \n
                **CREATED AT** - ${message.guild.createdAt.toLocaleString()} \n
                **Rules Channel** - <#801723660984516648> \n
                **Server Updates Channel** - <#801723661593477131> \n
                **Server Region** - ${message.guild.region} \n
                **Members** - ${message.guild.memberCount} \n
                **Total Channels** - ${chs}\n 
                **Text Channels** - ${text} \n
                **Voice Channels** - ${voice}\n
                **Roles** - ${roles} \n
                
                   `)
         embed.setThumbnail(message.guild.iconURL())
          
         embed.setFooter(`On the order of server owners and staff`, message.author.avatarURL());
         embed.setTimestamp() 
               
        
				
       
            message.channel.send(embed);
        }
        catch {
            return message.channel.send('Something Went Wrong!')
        }
    }


module.exports.help = {
  name:"serverinfo",
  aliases: ["si"]
}