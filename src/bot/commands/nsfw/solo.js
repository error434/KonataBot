const Command = require('../../structures/BaseCommand');

class soloCommand extends Command {
    constructor(bot) {
        super(bot, {
            name: 'solo',
            desc: 'solo a user!',
            category: 'nsfw',
            nsfwOnly: true,
            examples: [
                '{prefix}solo',
            ],
            cooldown: 5
        });
    }

    async execute(msg, args) {
        const neko = await this.bot.snek.get('https://nekos.life/api/v2/img/solo');

        if (!msg.mentions[0]) {
            msg.channel.createMessage({ 
            content: ` here is your solo:`,
            embed: {
                image: {
                    url: neko.body.url
                },
                color: this.bot.utils.color
            }});
        }
    }
}

module.exports = soloCommand;