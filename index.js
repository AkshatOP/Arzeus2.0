const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();


fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }
  

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => { 
      bot.aliases.set(alias, props.help.name);
  
  });
});
})

  bot.on("ready", ready => {
bot.user.setActivity(`ARZEUS 2.0`, {

type: "STREAMING",

url: "https://www.youtube.com/channel/UCF8EBnJskNhd-JON7D4CgpA"})

    .then(presence => console.log(`${presence.game ? presence.game.none : 'YOUR BOT IS READY ! xD'}`))

    .catch(console.error);
 console.log(`${bot.user.username} is online on ${bot.guilds.size} servers! made by AK`);

});

  bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    let prefix = process.env.prefix
    let messageArray = message.content.split(" ");
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();
    let commandfile;

    if (bot.commands.has(cmd)) {
      commandfile = bot.commands.get(cmd);
  } else if (bot.aliases.has(cmd)) {
    commandfile = bot.commands.get(bot.aliases.get(cmd));
  }
  
      if (!message.content.startsWith(prefix)) return;

          
  try {
    commandfile.run(bot, message, args);
  
  } catch (e) {
  }}
  )


bot.on("message", message => {
   if (message.content === `<@!804254260308082719>`) {
      const embed = new Discord.MessageEmbed()
    .setColor("GOLD")
    .setTitle(`${bot.user.username}`)
    .setDescription(`Hello trainer! This is official bot of server ArZeus 2.0 . My prefix is **Az!**. You can type **Az!help** to view bot commands. In case of any error then DM <@721675303486750730>`)
    .setFooter(`Requested by ${message.author.username} `)
    .setTimestamp()
      
    return  message.channel.send(embed)
   }
});


bot.on("message", message => {
  const victim = message.mentions.members.first()
if (message.content.startsWith("c!kill")) {
    
    
    if (!victim){ 
return message.reply("Mention someone to kill, murderer")
} else {

      message.channel.send (`${victim} was killed by the incredible stench of an old Lunch Carrot, lmfao (oh that was me...)`)
    }
}
})


bot.login(process.env.token);
