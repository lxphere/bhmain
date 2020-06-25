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
		.setDescription("__Dear" + member + ",__"),
    		fields: [{
						name: "Information",
						value: "We are extremely proud to announce that you have passed and accelerated in Bean House’s Administrative Assistant Applications! You will now be moving on to phase 2/2  which will consist of training and overall trials. This is to ensure you are fit for your role and can adequately execute what you propose within your application! We want to see the best of your capabilities and test them to the limits. Please do not feel overwhelmed as many other people will be undergoing Phase 2 with you! Once again, congratulations"
					},
					{
						name: "Expectations",
						value: "**Before we commence Phase 2, it is expected you complete these requirements:\n** 
						       + "> • Reply so we are aware you have received the response. (Do not send the bot a message, instead DM @samm#0021 (Lxphere)\n"
						       + "> • Engage in shifts and portay activity.\n"
						       + "> • Ensure you participate in your department and successfully complete any tasks given.\n"
						       + "> • Join the moderation group (let Lxphere know you joined the group) and take a glance of our MR website.\n"
						       + ">**Website:** https://beanhouseroblox.wixsite.com/moderation/home - Glance this.\n"
						       + "**ROBLOX GROUP:** https://www.roblox.com/groups/6051470/Bean-House-Moderation#!/about - Join this."
					},
			 		{
						name: "Extra",
						value: "That is all you will be required to do, any extra info will be given in your respective department channel. \n**Best Regards,**\n**Lxphere**\n**Vice Chairman**"
					}
					]
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
