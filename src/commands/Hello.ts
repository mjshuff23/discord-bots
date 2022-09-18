import { ApplicationCommandType, CommandInteraction, Client } from 'discord.js';
import { Command } from '../Command';

export const Hello: Command = {
  name: 'hello',
  description: 'Returns a gretting.',
  type: ApplicationCommandType.ChatInput,
  run: async(client: Client, interaction: CommandInteraction): Promise<void> => {
    const content = 'Hello!';

    await interaction.followUp({
      ephemeral: true,
      content
    })
  }
}