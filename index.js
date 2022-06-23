const config = require(`./config.json`);
const discord = require('discord.js');
const client = new discord.Client();


client.on("ready", () => {
    client.user.setActivity(`Game Commiunity `, {type:"STREAMING"})
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(` Dev By RezaMohammadis#8585`)
  }
  );


client.on('guildMemberAdd', member => {
    let welcomeChannel = client.channels.cache.get("988315568996241498")
    if (welcomeChannel) {

        let welcomeEmbed = new discord.MessageEmbed()
        if (member.user) {

            if (member.user.client) {

                welcomeEmbed.setColor("#F09F25")
                welcomeEmbed.setAuthor('Game Commiunity', 'https://cdn.discordapp.com/icons/985812863279067217/a_863173cc574169aba78c887ebf5f89c3.gif?size=4096');
                welcomeEmbed.setDescription(`  <a:w_:984775829366112306>  <a:e_:984775822126747708> <a:l_:984775823846432818>  <a:c_:984775820402905098> <a:m_:984775825582874634> <a:e_:984775822126747708> \n\n **Name Member : <@${member.user.id}> \n\n MemberCount :  ${member.guild.memberCount}**`)
                welcomeEmbed.setThumbnail(member.user.displayAvatarURL())
                welcomeEmbed.setImage('https://cdn.discordapp.com/attachments/989098976970166272/989156137502920714/welcome.png')
                welcomeEmbed.setFooter('Game Commiunity', 'https://cdn.discordapp.com/icons/985812863279067217/a_863173cc574169aba78c887ebf5f89c3.gif?size=4096');
                welcomeChannel.send(welcomeEmbed)
            }
        }
    } else {
        console.log("Welcome Channel Yaft Nashod")
    }
})

client.login(config.token)
