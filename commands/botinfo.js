  
const { MessageEmbed } = require("discord.js");



  
module.exports.run = async (bot, message, args) => {
//    let commands = message.bot.commands.array();

    let botinfo = new MessageEmbed()
      .setTitle("__Bot information:-__")
      .setDescription("Arzeus 2.0 is an official bot for Arzeus and is meant to have mini games and some entertainment.")
      .addField("Bot Name:-","`ArZeus 2.0`")
      .addField("Bot Owner/Devs:-","`@🔥⃤•AK_ØPᵈᵉᵛ✓#0007 & @EMIR [33 forever] 2099#2099`")

      .addField("CPU/Memory Usage:-","`9%` / `25%`")
      .addField("Bot Prefix:-","`Az! , Do Az!help for cmds`")
      .addField("Bot Version:-","`0.0.1`")
    //  .addField("Total Server:-",`${message.client.guilds.cache.size} Servers!`)
      .addField("Bot Library:-","`Discord.js`")
      //.addField("Support Server:-","[SupportServer](https://discord.gg/zKkG77em9z)")
      //.addField("Invite Me:-","[ClickMe](https://discord.com/api/oauth2/authorize?client_id=739879279881617499&permissions=8&scope=bot)")
     // .addField("Vote Me:-","[ClickHere](https://top.gg/bot/739879279881617499)")
     // .addField("Official Website:-","[Visit bot website!](https://cupcakebot1.glitch.me)")
      .setThumbnail("https://cdn.discordapp.com/avatars/804254260308082719/4f345b974bc5643d4886bfb4a67f2ed0.png?size=1024")
      .setFooter("Thank you for using me :)")
      .setTimestamp()
    
    //  .setDescription("<a:info5:770180505189744640>Bot Name:-\n`Sizuka`\n<:dev:770310492760965130>Bot Owner;-\n`@Yashraj OPᵈᵉᵛ✓#8549`\n<a:warned:770907435841355786>CPU/Memory Usage:-\n`5%`/`9%`\n<a:Tempo:770906505787867136>Uptime:-\n" + `**${duration}**` + "\n<a:star1:770908080706813973>Total Servers/Members" + `\n${client.guilds.cache.size} Servers / ${client.users.cache.size} Members` + "\n<:Discordjs:770310886668763147>Bot Library:-\n`discord.js`")
      .setColor("GOLD")

    return message.channel.send(botinfo).catch(console.error);
  }

module.exports.help = {
  name:"botinfo",
  aliases: [""]
}