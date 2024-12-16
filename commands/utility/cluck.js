const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('time')
		.setDescription("Replies with Cluck o'clock!"),
	async execute(interaction) {
		await interaction.reply("Cluck o'clock!");
	},
};
