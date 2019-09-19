const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	if (!message.member.roles.get("623987915281793064")) return message.reply("You must be an MR or above to run this command.").catch(() => bot.safeSend(message, module.exports.help.name));
		let embed = new Discord.RichEmbed()
		.setTitle("Bean House | Shift")
		.setColor("#fff993")
		.setDescription(args.join(" "))
		.setFooter(`This announcement was made by ${message.author.tag}`, message.author.displayAvatarURL)
 		.setThumbnail("https://cdn.discordapp.com/attachments/438816225909276683/580512978277761025/image0.png");
		bot.channels.get("623994687841370114").send({embed: embed}).then(() => {
		message.reply("Message sent!");
	}).catch(() => {
		message.reply("Something went wrong when sending the shift announcement, please check my error, <@293060399106883584>.");
	});
};
module.exports.help = {
	name: "shift",
	usage: "shift <txt>",
	description: "Announcement command, no ping.",
	longdes: "An announcement command, with no ping.",
	mentionedperm: "Session Perm Roles",
	category: "Utility"
};
