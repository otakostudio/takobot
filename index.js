const config = require('./config.json');
const Discord = require('discord.js');
const util = require('util');
const bot = new Discord.Client({
	disableEveryone: true,
	disabledEvents: ['TYPING_START']});
const prefix = "tako ";
const ownerID = process.env.ownerID;
const token = process.env.token;
var brandyID = "<@166022014031626261>"

// Loading global variables
const helloResponses =["fight me, you ho", "don't @ me you fucker","oh my how lewd",
					"YOU'RE NOT MY DAD","who gave you permission to talk to me",
					"ey yo what up","what's poppin?","yes?"]
const despResponses = ["no", "NO!", "DESPACI-NO", "NO NO NO", "STOP",
					"BANNED", "I will end you"];
const rateResponses = [
	/* positive */ [
		"100/10",
		"8/8 would date m8"
	],
	/* neutral */  [
		"7.8/10, too much water",
		"5/10",
		"Meh"
	],
	/* negative */ [
		"1/10",
		"Eww, no",
		"Would not touch with a 10ft pole, 1 star",
		"But, I poop from there",
		"Not even with a 39 and a half-foot pole!"
	]
];

bot.on("ready", () => {
	bot.user.setActivity('with Tentacles'); //default game
	console.log(`@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@#@@%(((((&@@#@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@################((((((@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@###@@((((((((((((((@((((((((@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@((((((%*(((((((((((((((((((((((@@@@@@@@@@@@@@@
@@@@@@@@@@##&(/////%///////////////(%((((@(((((#@@@@@@@@@@@
@@@@@@@@@@*///////*/////////////#///%/(((((((((((@@@@@@@@@@
@@@@@@@@*******////////////////////%%////%((@(((((@@@@@@@@@
@@@@@@@**********%***/****/////%/****%//////*@(((((@@@@@@@@
@@@@@@********%*%%%%*/****//%#(%%%*****%/%/*/*@(((((@@@@@@@
@@@@@@******#*******%/////%///%******/***%///(%@(((((@@@@@@
@@@@@@*/////%**///*****////(//**********%////*(((((((@@@@@@
@@@@@@*////@@@@@@@@@&******@@#/####@@@@@///%(((((((((@@@@@@
@@@@@(#@///(*   @@@*@**///*   @@@*@@@@%%**(((((((((((%@@@@@
@@@@@(@((%((/@(**................,******%(((((((((((((@@@@@
@@@@@(*(((#,,,,,,................,,,,,,%(((((((@((((((@@@@@
@@@@@@(((((,,,,,,.....//.//......,,,,%(((((((((#(((((#@@@@@
@@@@@@(((((%,,,...................%(((((((((((@((((((@@@@@@
@@@@@%(((((((#......................%((((((((@((((((((@@@@@
@@@@@@&((((%.....................%((((((((((@(((((((&@@@@@@
@@@@@@@@#&@@&......................#%%%%@@@((((((((@@@@@@@@
@@@@@@@@@#######.....................@##@((((((((((@@@@@@@@
@@@@@@@@@@######@#@@............(@###@(((((((((((((@@@@@@@@
@@@@@@@@@@@########@####@,,,,,,###@((((((((((((##@@@@@@@@@@
@@@@@@@@@@@@@##########@&,,,,,@###(((#######((((@@@@@@@@@@@
@@@@@@@@@@@@@@(###########@,############((((@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@(#@@#############@###&@##&@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@########## @####%@@ @#((((((((%@@@@@@@@@@@@@@
@@@@@@@@@@@#(########### @####((@ @(((((((((((@@@@@@@@@@@@@`);
	console.info("TAKO-CHAN IS ONLINE");
	console.info(`TAKO-CHAN is lewding up ${bot.guilds.size} server(s)!`);});

bot.on('message', async message => {

	if(message.author.bot || message.system) return; // Ignore bots
	if(message.channel.type === 'dm') { // Direct Message
		return;}//Optionally handle direct messages

	/*
	message.reply(""); //replies to sender at start of message
	message.channel.send(""); //sends a message in the channel
	*/

	if (message.content.toLowerCase().startsWith("hi tako")||
	message.content.toLowerCase().startsWith("hey tako")){
		/*if(message.member.roles() === "Studio Member"){
			message.channel.send(`Oh it's ${message.author.toString()}, what a cutie!!`);
			return;
		}else{*/
			var response = helloResponses [Math.floor(Math.random()*helloResponses .length)];
			message.channel.send(response).then().catch(console.error);
		//}
	}
	
	if (message.content.toLowerCase().startsWith("bend over")){
		message.reply("haha, you wish");
	}

	if (message.content.split(" ") &&
	message.content.toLowerCase() === "despacito"||
	message.content.toLowerCase() === "d e s p a c i t o"||
	message.content.toLowerCase() === "des pacito"){
		var response = despResponses [Math.floor(Math.random()*despResponses .length)];
		message.channel.send(response).then().catch(console.error);
	}
	
	//Commands, Tako will only respond if preceeded by the prefix
	if (message.content.toLowerCase().startsWith(prefix)) {
		const args = message.content.slice(prefix.length).split(/ +/);
		const command = args.shift().toLowerCase();

		if (command === "ping") {
			let pang = Math.round(bot.ping);
			message.channel.send(`Pong: ${pang}ms`);
		}

		else if (command == "uptime"){
			//message.reply(`Current uptime is : ${client.uptime.toPrecision(2) * 0.001} seconds`)
			let totalSeconds = (bot.uptime / 1000);
			let hours = Math.floor(totalSeconds / 3600);
			totalSeconds %= 3600;
			let minutes = Math.floor(totalSeconds / 60);
			let seconds = totalSeconds % 60;
			let sec = Math.round(seconds);
			let uptime = `${hours} hours, ${minutes} minutes and ${sec} seconds`;
			message.reply("Current uptime is : " + uptime);
		}

		else if (command == 'help'){
			message.channel.send("Tako-bot was made in part by " + brandyID + "\nhttps://github.com/otakostudio/takobot/blob/master/COMMANDS.md");
		}

		else if (command === "asl") 
		{
			let age = args[0];
			let sex = args[1];
			let location = args[2];
			message.channel.send(`Hey <@` + message.author.id + `>, I see you're a ${age} year old ${sex} from ${location}. Wanna have a good time?`);
		}

		else if (command === "self"){
			let addon = args[0];
			if(addon.toLowerCase() === "destruct"){
				for (i = 0; i < 70; i++) { 
					if (i = 10){
						message.channel.send("3");
					}
					if (i = 25){
						message.channel.send("2");
					}
					if (i = 40){
						message.channel.send("1");
					}
					if (i = 55){
						message.channel.send("💣");
					}
					if (i = 70){
						message.channel.send("💥");
					}
				}
			}else{
				message.channel.send(`I don't know what command that is.`);
				return;
			}
		}

		else if (command === "rate"){
			let addon = args[0];
			if(addon.toLowerCase() === "me"){
				var g1 = Math.floor(Math.random()* rateResponses.length);
				var g2 = Math.floor(Math.random()* rateResponses[g1].length);
				message.channel.send(rateResponses[g1][g2]).then().catch(console.error);
			}else{
				message.channel.send(`I don't know what command that is.`);
				return;
			}
		}

		else {
			message.channel.send(`I don't know what command that is.`);
			return;
		}
		
	} else if (message.content.indexOf("<@"+bot.user.id) === 0 || message.content.indexOf("<@!"+bot.user.id) === 0) { // Catch @Mentions

		return message.channel.send(`Use \`${config.prefix}\` to interact with me.`); //help people learn your prefix
	}
	return;
});

//DON'T TOUCH YOU LOSER
function evalCmd(message, code) {
	if(message.author.id !== config.owner) return;
	try {
		let evaled = eval(code);
		if (typeof evaled !== "string")
			evaled = util.inspect(evaled);
			message.channel.send(clean(evaled), {code:"xl"});
	} catch (err) {
		message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
	}
}
function clean(text) {
	if (typeof(text) !== 'string') {
		text = util.inspect(text, { depth: 0 });
	}
	text = text
		.replace(/`/g, '`' + String.fromCharCode(8203))
		.replace(/@/g, '@' + String.fromCharCode(8203))
		.replace(config.token, 'mfa.VkO_2G4Qv3T--NO--lWetW_tjND--TOKEN--QFTm6YGtzq9PH--4U--tG0') //Don't let it post your token
	return text;
}

// Catch Errors before they crash the app.
process.on('uncaughtException', (err) => {
	const errorMsg = err.stack.replace(new RegExp(`${__dirname}/`, 'g'), './');
	console.error('Uncaught Exception: ', errorMsg);
	// process.exit(1); //Eh, should be fine, but maybe handle this?
});

process.on('unhandledRejection', err => {
	console.error('Uncaught Promise Error: ', err);
	// process.exit(1); //Eh, should be fine, but maybe handle this?
});

bot.login(config.token);