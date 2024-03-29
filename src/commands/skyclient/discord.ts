import { Command } from 'discord-akairo';
import { MessageEmbed } from 'discord.js';
import axios from "axios"
import utils from '../../functions/utils';
import { BotCommand } from '../../extensions/BotCommand';

export default class discord extends BotCommand {
    constructor() {
        super('discord', {
            aliases: ['discord'],
            args: [
                { id: "discordServer", type: "string" }
            ]
        });
    }

    async exec(message, args) {
        const SkyClientGuilds = [
            `780181693100982273`, //main server
            `824680357936103497` //testing server
        ]
        if (SkyClientGuilds.includes(message.guild.id)) {
            const res = await axios(`https://raw.githubusercontent.com/nacrt/SkyblockClient-REPO/main/files/discords.json`, { method: "get" })
            let found = false

            for (const discord of res.data) {
                discord.nicknames.forEach(element => {
                    if (args.discordServer == element) {
                        message.channel.send(`discord.gg/${discord.code}`)
                    }
                });
            }
        }
        else { return }
    }
}