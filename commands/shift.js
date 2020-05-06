const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
	if (!message.member.roles.get("623616153247285259")) return message.reply("You must be an MR or above to run this command.").catch(() => bot.safeSend(message, module.exports.help.name));
	let embed = new Discord.RichEmbed()
		.setTitle("Bean House Shift")
		.setColor("#faf21b")
		.setDescription("<:BeanHouseIcon:551253446808961035> | Hello everyone, I am hosting a shift at the cafe! Come on and join me for a luxurious time! Link: https://www.roblox.com/games/3620192724/Bean-House-Cafe")
		.setFooter(`This shift is being hosted by ${message.author.tag}`, message.author.displayAvatarURL)
	   	.setThumbnail("https://cdn.discordapp.com/attachments/528399681185906736/622802049448542208/1ea15beadf327b617edbe2e5ed5a7f6b.png");
          	bot.channels.get("625464803863035936").send("a", {embed: embed}).then(() => {
		message.reply("Sent! Please make sure the next shift is **45 minutes** from this current shift.");
		}) .catch(error => bot.channels.get("707607323329429564").send(`Error: ${message.author} ran the shift command and an unexpected error occured: ${error}`))
		message.reply("Error occured; the developer has been sent the error message.");
};
module.exports.help = {
	name: "shift",
	usage: "shift <txt>",
	description: "Shift command.",
	longdes: "A shift command for MR+ to use.",
	mentionedperm: "Session Permission Role (MR+)",
	category: "Utility"
};
