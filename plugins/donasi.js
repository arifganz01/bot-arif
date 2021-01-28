let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosaat [085896181301
│ • Telkomsel [082279601471]
│ • Gopay [082279601471]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6281357302007
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
