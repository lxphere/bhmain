const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
	if (!message.member.roles.get("623987915281793064")) return message.reply("You must be an MR or above to run this command.").catch(() => bot.safeSend(message, module.exports.help.name));
	let embed = new Discord.RichEmbed()
		.setTitle("Bean House Shift")
		.setColor("#63dfff")
		.setDescription("Hello everyone, I am hosting a shift at the cafe! Come on and join me for a luxrious time! :link: https://www.roblox.com/games/3620192724/Bean-House-Cafe")
		.setFooter(`Shift hosted by ${message.author.tag}`, message.author.displayAvatarURL)
	   	.setThumbnail("https://cdn.discordapp.com/attachments/541388616774057984/546105276491759658/asdas.png");
          	bot.channels.get("623994687841370114").send("@here", {embed: embed}).then(() => {
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
