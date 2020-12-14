const auth = require('./auth.json');

const {Client, MessageAttachment, MessageEmbed, GuildMember, Guild, VoiceState} = require('discord.js');

const fs = require('fs');

// Create an instance of a Discord client

const client = new Client();


//const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for new guild members
client.on("guildMemberAdd", (member) => {
  console.log(`New User "${member.user.username}" has joined "${member.guild}"` );
  const channel = member.guild.channels.cache.find(ch => ch.name === 'newtown' || ch.name === 'welcome' || ch.name === '🖐🏽welcome🖐🏽' || ch.name === 'general');
  if(member.user.id === "300587092235255809") {
	  channel.send(`${member} has joined this server`);
	  channel.send('Please leave');
	  
  }	else if (member.user.id === '434081005289078796') {
		channel.send(`${member} has joined this server`);
		channel.send("oh GOD. it's *HIM*");
  
  } else if (member.user.id === '318200323133145089') {
		channel.send(`${member} has joined this server`);
		channel.send("YAY! it's Rex :D");
		
  } else if (member.user.id === '652664638449647646') {
		channel.send(`${member} has joined this server`);
		channel.send("I'm in the street.");
	 
  } else if (member.user.id === '232100744830910464') {
		channel.send(`${member} has joined this server`);
		channel.send("**GOD** has entered your realm. Prepare for the apocalypse");
		
		
  } else {
  channel.send(`${member} has joined this server`);
  }
  
  
  
});

client.on('message', async (message) => {
	var isReady = true;
	
	const args = message.content
	const command = args.toLowerCase();
	
	if (message.content === 'Restart') {
		if (message.author.id !== '232100744830910464') return;
		console.log('Restarted.');
		message.channel.send('Fine. I just did it.').then(() => {
		process.exit(1);
		})	
	} else if (message.content === 'Shutdown') {
		if (message.author.id !== '232100744830910464') return;
		console.log('Successfully Shutdown');
		message.channel.send("I'll just leave then. Hope you're happy").then(m => {
			client.destroy();
		})
	}	
	
	if (message.content == '!PeopleAskedWhy') {
		console.log(`"${message.author.username}" has used the command "${message.content}"`);
		message.channel.send('I needed something to practice so someone gave me words to say');
	}
	
	if (message.content == '!chesstime') {
		console.log(`"${message.author.username}" has used the command "${message.content}"`);
		message.channel.send('John is bad at chess');
	}
	
	if (message.content == '!ping') {
		console.log(`"${message.author.username}" has used the command "${message.content}"`);
		message.channel.send('pong!');
	}
	
	if (message.content == 'max' || message.content == 'Max') {
		console.log(`"${message.author.username}" has used the command "${message.content}"`);
		message.channel.send('Max is cool');
	}
	
			//Sending pictures
	if (message.content == 'Am I cool?') {
		console.log(`"${message.author.username}" has used the command "${message.content}"`);
		const attachment = new MessageAttachment('./cool.jpg');
		// Send the attachment in the message channel with a content
    	message.channel.send(attachment);
	}	
		
				//Using a bot to speak through a voice channel

	if (isReady == true && message.member.voice.channel && message.content == "Revenge") {
		
		const connection = await message.member.voice.channel.join();
		const dispatcher = connection.play('./Soundboard/REVENGE.wav');
		
		dispatcher.on('start', () => {
			console.log('REVENGE.wav is now playing!');
			isReady = false;
		});	

		dispatcher.on('error', console.error);
	}
	
	if (isReady == true && message.member.voice.channel && message.content == "Guardians of the galaxy") {
		
		const connection = await message.member.voice.channel.join();
		const dispatcher = connection.play('./Soundboard/guardinofdancingmaybe.wav');
		
		dispatcher.on('start', () => {
			console.log('guardinofdancingmaybe.wav is now playing!');
			isReady = false;
		});	

		dispatcher.on('error', console.error);
	}
	
	if (isReady == true && message.member.voice.channel && message.content == "country road") {
		
		const connection = await message.member.voice.channel.join();
		const dispatcher = connection.play('./Soundboard/countryroad.wav');
		
		dispatcher.on('start', () => {
			console.log('countryroad.wav is now playing!');
			isReady = false;
		});	

		dispatcher.on('error', console.error);
	}
	
	if (isReady == true && message.member.voice.channel && message.content == "careless whisper") {
		
		const connection = await message.member.voice.channel.join();
		const dispatcher = connection.play('./Soundboard/george-micael-wham-careless-whisper-1.mp3');
		
		dispatcher.on('start', () => {
			console.log('george-micael-wham-careless-whisper-1.mp3 is now playing!');
			isReady = false;
		});	

		dispatcher.on('error', console.error);
	}
	
	
	if (isReady == true && message.member.voice.channel && message.content == "Almost naked animals theme song") {
		
		const connection = await message.member.voice.channel.join();
		const dispatcher = connection.play('./Soundboard/AlmostnakedanimalsSong.wav');
		
		dispatcher.on('start', () => {
			console.log('AlmostnakedanimalsSong.wav is now playing!');
			isReady = false;
		});	

		dispatcher.on('error', console.error);
	}
	
	if (isReady == true && message.member.voice.channel && message.content == "duck song is a good song") {
		
		const connection = await message.member.voice.channel.join();
		const dispatcher = connection.play('./Soundboard/DuckSong.wav');
		
		dispatcher.on('start', () => {
			console.log('DuckSong.wav is now playing!');
			isReady = false;
		});	

		dispatcher.on('error', console.error);
	}
	
		if (isReady == true && message.member.voice.channel && message.content == "grapes are cool") {
		
		const connection = await message.member.voice.channel.join();
		const dispatcher = connection.play('./Soundboard/DuckSong2.wav');
		
		dispatcher.on('start', () => {
			console.log('DuckSong2.wav is now playing!');
			isReady = false;
		});	

		dispatcher.on('error', console.error);
	}
	
	if (isReady == true && message.member.voice.channel && message.content == "got any duck tape?") {
		
		const connection = await message.member.voice.channel.join();
		const dispatcher = connection.play('./Soundboard/DuckSong3.wav');
		
		dispatcher.on('start', () => {
			console.log('DuckSong3.wav is now playing!');
			isReady = false;
		});	

		dispatcher.on('error', console.error);
	}
	
	if (isReady == true && message.member.voice.channel && message.content == "ba na na") {
		
		const connection = await message.member.voice.channel.join();
		const dispatcher = connection.play('./Soundboard/Banana Joe Whistle.mp3');
		
		dispatcher.on('start', () => {
			console.log('Banana Joe Whistle.mp3 is now playing!');
			isReady = false;
		});	

		dispatcher.on('error', console.error);
	}
	
	if (isReady == true && message.member.voice.channel && message.content == "honestly the best song in cartoons") {
		
		const connection = await message.member.voice.channel.join();
		const dispatcher = connection.play('./Soundboard/goodRegularSong.wav');
		
		dispatcher.on('start', () => {
			console.log('goodRegularSong.wav is now playing!');
			isReady = false;
		});	

		dispatcher.on('error', console.error);
	}
	
	if (isReady == true && message.member.voice.channel && message.content == "bye bye") {
		const connection = await message.member.voice.channel.join();
		const dispatcher = connection.play('./Soundboard/ByeByeBye.wav');
		
		dispatcher.on('start', () => {
			console.log('ByeByeBye.wav is now playing!');
			isReady = false;
		});
		
	}	
	
	if (isReady == true && message.member.voice.channel && message.content == "I want it that way") {
		const connection = await message.member.voice.channel.join();
		const dispatcher = connection.play('./Soundboard/IwantThatway.wav');
		
		dispatcher.on('start', () => {
			console.log('IwantThatway.wav is now playing!');
			isReady = false;
		
		});
		
		
	}	
	
	if (isReady == true && message.member.voice.channel && message.content == "dancin") {
		const connection = await message.member.voice.channel.join();
		const dispatcher = connection.play('./Soundboard/dancin.wav');
		
		dispatcher.on('start', () => {
			console.log('dancin.wav is now playing!');
			isReady = false;
		});
		
		
	}
	
	if (isReady == true && message.member.voice.channel && message.content == "MINE DIAMONDS") {
		const connection = await message.member.voice.channel.join();
		const dispatcher = connection.play('./Soundboard/RickRoll.wav');
		
		dispatcher.on('start', () => {
			console.log('RickRoll.wav is now playing!');
			isReady = false;
		});
		
		
	}
	
	if (isReady == true && message.member.voice.channel && message.content == "mr blue sky") {
		const connection = await message.member.voice.channel.join();
		const dispatcher = connection.play('./Soundboard/MrBlueSky.wav');
		
		dispatcher.on('start', () => {
			console.log('MrBlueSky.wav is now playing!');
			isReady = false;
		});
		
		
	}
	
	if (isReady == true && message.member.voice.channel && message.content == "refund") {
		const connection = await message.member.voice.channel.join();
		const dispatcher = connection.play('./Soundboard/RefundTheWorld.wav');
		
		dispatcher.on('start', () => {
			console.log('RefundTheWorld.wav is now playing!');
			isReady = false;
		});
		
		
	}
	
	
		
	if (isReady == true && message.member.voice.channel && message.content == "Goofy Trial") {
		const connection = await message.member.voice.channel.join();
		const dispatcher = connection.play('./Soundboard/GOOFYTRAIL.wav');
		
		dispatcher.on('start', () => {
			console.log('GOOFYTRAIL.wav is now playing!');
			isReady = false;
		});
		
		
	}
	
	
	if (command === '!kick') {
		const taggedUser = message.guild.member(message.mentions.users.first())
		taggedUser.voice.kick("You have been kicked");
		console.log('Someone got disconnected by ChillBot');
		
	}
	
	if (message.content == 'I SUMMON THEE! CREATE VOICE CHAT!') {
		const targetServer = client.guilds.cache.get(716417744890757221);
		
		message.guild.channels.create('Crazy Nation','voice');
	}
	
	if (message.content == '!leaveCall') {
			console.log(`'"ChillBot" has left ${message.guild.voice.channel.toString()}'`);
			const connection = message.guild.voice && message.guild.voice.connection;
			if (connection) {
				connection.disconnect();
			}
	}	
	
	if (message.content == 'help') {
			console.log('someone did the "help" command');
			const embed = new MessageEmbed()
			.setTitle('Soundboard Commands')
			.setColor([255, 0, 0 ])
			.setDescription("Revenge\nGuardians of the galaxy\ncountry road\nAlmost naked animals theme song\nduck song is a good song\ngrapes are cool\ngot any duck tape?\nba na na\nhonestly the best song in cartoons\nbye bye\nI want it that way\ndancin\nMINE DIAMONDS\nmr blue sky\nrefund\nGoofy Trial");
			message.channel.send(embed);
	}	
	
	
	
	
	
	
						//Embed Messages
	if (message.content == 'Seagull')	{
		
		console.log(`"${message.author.username}" has used the command "${message.content}"`);
		const embed = new MessageEmbed()
		//Set the title of the field
		.setTitle('Seagull')
		//Set the color of the embed
		.setColor([146, 118, 61])
		//set the main content of the embed
		.setDescription('You are an animal of the sea.');
		
		message.channel.send(embed);
	
	}
				//Changing avatars
	if (message.content === 'what is my avatar') {
		console.log(`"${message.author.username}" has used the command "${message.content}"`);
			//Send the user's avatar URL
		message.reply(message.author.displayAvatarURL());
	}

	if (message.content === 'record') {
		const connection = await message.member.voice.channel.join();
		// Me Stream
		const audio = connection.receiver.createStream('232100744830910464', { mode: 'pcm'});
		// John's Stream
		const audio2 = connection.receiver.createStream('526829389313343489', { mode: 'pcm'});
		// Rex Stream
		const audio3 = connection.receiver.createStream('434081005289078796', { mode: 'pcm'});
		// Jenna Stream
		const audio4 = connection.receiver.createStream('318200323133145089', { mode: 'pcm'});
		// Will's Stream
		const audio5 = connection.receiver.createStream('300587092235255809', { mode: 'pcm'});
		// Josh's Stream
		const audio6 = connection.receiver.createStream('266269782389686272', { mode: 'pcm'});
		// Sarah's Stream
		const audio7 = connection.receiver.createStream('652664638449647646', { mode: 'pcm'});
		////////////////////////////////////////////////////////////////////////////////////////////
		
		audio.pipe(fs.createWriteStream('./audio_recording/Me'));
		audio2.pipe(fs.createWriteStream('./audio_recording/John'));
		audio3.pipe(fs.createWriteStream('./audio_recording/Rex'));
		audio4.pipe(fs.createWriteStream('./audio_recording/Jenna'));
		audio5.pipe(fs.createWriteStream('./audio_recording/Will'));
		audio6.pipe(fs.createWriteStream('./audio_recording/Josh'));
		audio7.pipe(fs.createWriteStream('./audio_recording/Sarah'));
		
		
		console.log("Recorded and saved");
		//connection.play(audio, { type: 'opus' });
		
		
	}
	//Private messages the entire server
	if (message.guild && message.content.startsWith('!dmall')) {
		if (message.author.id !== '232100744830910464' && message.author.id !== '275219070524194816') return;
		let text = message.content.slice('/private'.length); // cuts off the /private part
		message.channel.send("Processing...").then( async (sentMessage) => {
			message.guild.members.cache.forEach(member => {
				
				if (member.id != client.user.id && !member.user.bot) {
					
					member.send(text);
					
				}
		sentMessage.edit("Done!");
		});		
    
	});
		
	}
	
});


// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login(auth.token)