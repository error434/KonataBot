const Command = require('../../structures/BaseCommand');

class EvalCommand extends Command {
    constructor(bot) {
        super(bot, {
            name: 'eval',
            desc: 'Executes JavaScript code.',
            usage: 'eval [...code]',
            aliases: ['js'],
            examples: ['konata eval function nou() { return; }'],
            ownerOnly: true,
            category: 'Developers'
        });
    }

    async execute(msg, args) {
        if (!args[0]) {
            return msg.channel.createMessage(`<:KonataYawn:710895044831477774> **|** Invalid usage! Use \`${this.bot.config.prefix}help eval\`!`);
        } else {
            let res;
            try {
                res = await eval(args.join(' '));

                msg.channel.createMessage(this.bot.utils.codeblock('js', res));
            } catch(err) {
                msg.channel.createMessage(this.bot.utils.codeblock('js', err));
            }
        }
    }
}

module.exports = EvalCommand;