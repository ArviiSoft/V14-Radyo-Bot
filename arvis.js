
const { Client, Intents, Collection, MessageEmbed } = require("discord.js");
const client = global.client = new Client({ 'intents': [32767]});

const { TOKEN, CHANNEL, LIVE } = require("./config.js");
const config = require('./config.js')
const voiceDiscord = require(`@discordjs/voice`)
const ytdl = require('ytdl-core');
const express = require('express')

//arviis.
client.on('ready', async () => {

  client.user.setStatus("online");
  client.user.setActivity(`arviis.`, {type: "LISTENING"});

//arviis.
  const VoiceChannel = client.channels.cache.get(CHANNEL);
 const connection = voiceDiscord.joinVoiceChannel({
    channelId: VoiceChannel.id,
		guildId: VoiceChannel.guild.id,
		adapterCreator: VoiceChannel.guild.voiceAdapterCreator,
		selfDeaf: true,
  });
});


//arviis.
setInterval(async function() {
  const VoiceChannel = client.channels.cache.get(CHANNEL);
  const connection = voiceDiscord.joinVoiceChannel({
    channelId: VoiceChannel.id,
		guildId: VoiceChannel.guild.id,
		adapterCreator: VoiceChannel.guild.voiceAdapterCreator,
		selfDeaf: true,
  });

  const player = voiceDiscord.createAudioPlayer(ytdl(LIVE));
  const resource = voiceDiscord.createAudioResource(ytdl(LIVE));
  player.play(resource);
  connection.subscribe(player); 
}, 20000)

//arviis.










//arviis.