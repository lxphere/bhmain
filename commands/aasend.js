const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
 const allowedid = ['293060399106883584'];
  if (!allowedid.includes(message.author.id)) return message.channel.send("You do not have permission to run this.");
let member = message.mentions.members.first() || message.guild.members.get(args[0]);
	if (!member)
		return message.reply("No user was provided.");
    let aapasser = new Discord.RichEmbed()
		.setTitle("Bean House Administrative Assistant Applications - Batch 01 Passers")
		.setColor("#85ffb0")
		.setDescription("__Dear" + {member} + ",")
		.setFooter("Bean House Bot")
		.setThumbnail("https://media.discordapp.net/attachments/528399681185906736/699372158870093925/image0.png?width=598&height=598");
    await member.send({embed: aapasser})
};
module.exports.help = {
	name: "aasend",
	usage: "aasend <@user>",
	description: "Who knows",
	longdes: "a cool command.",
	mentionedperm: "Dev",
	category: "Utility"
};
