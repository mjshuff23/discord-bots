import { CommandInteraction, Client, Interaction } from 'discord.js';
import { Commands } from '../Commands';

export default (client: Client): void => {
  client.on('interactionCreate', async (interaction: Interaction) => {
    if (interaction.isCommand() || interaction.isUserContextMenuCommand()) {
      await handleSlashCommand(client, interaction);
    }
  })
}

const handleSlashCommand = async (client: Client, interaction: CommandInteraction): Promise<void> => {
  // TODO: Handle slash commands here
  const slashCommand = Commands.find((command) => command.name === interaction.commandName);

  if (!slashCommand) {
    interaction.followUp({ content: "An error has occured while executing this command." });
    return;
  }

  await interaction.deferReply();

  slashCommand.run(client, interaction);
}