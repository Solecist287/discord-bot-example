const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roost')
		.setDescription("Makes a member roost around the rosie"),
	async execute(interaction) {
		await interaction.reply("placeholder");
	},
};
