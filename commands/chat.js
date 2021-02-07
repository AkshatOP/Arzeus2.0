const db = require('quick.db')


module.exports.run = (bot, message, args) => {
  
  let ownerID = ['785725873851990017' , '721675303486750730']
 if(ownerID.includes(message.author.id)){ 
	let check = db.get(`check_${message.guild.id}`);
	if (check) {
		db.delete(`check_${message.guild.id}`) && message.channel.send("Chat was disabled")
		db.delete(`languagecode_${message.guild.id}`)
		db.delete(`language_${message.guild.id}`)
	
	}
	else {
		db.set(`check_${message.guild.id}`, true) 
		message.channel.send("Chat was enabled")
		if (args[0]) {
			let a = require('../languages.json')[args[0].toLowerCase()] || "en-US"
			if (a) { 
				db.set(`languagecode_${message.guild.id}`, a)
				db.set(`language_${message.guild.id}`, args[0].toLowerCase())
			}
		} 
	}
}
}

module.exports.help = {
  name:"chat",
  aliases: ["talk"]
}