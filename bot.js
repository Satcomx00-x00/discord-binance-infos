//  A Satcomx00-x00 Nodejs Script
const Discord = require("discord.js");
const config = require("./config.json");
// const exec = require("child_process").exec;
// #################################################################

import Binance from 'binance-api-node'

const client = Binance()

// Authenticated client, can make signed calls
const client2 = Binance({
  apiKey: config.BINANCE.BINANCE_KEY,
  apiSecret: config.BINANCE.BINANCE_SECRET,
  getTime: xxx, // time generator function, optional, defaults to () => Date.now()
})

client.time().then(time => console.log(time))
// #################################################################






const client = new Discord.Client();
// Begin console
// Prefix commands
const prefix = ">>";
const codeblock = "\`\`\`";
const over = "\`\`";
// Commands Section Init
client.on("message", function(message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
    // Commands laod
    if (command === "introducing") {
        message.reply(`
        ${codeblock}
                Introducing the new Satcomx00-x00 Discord Bot Script called DaScan.
                A Nodejs based Discord Bot with NMAP scan tools and Vulns checker.
                (Actually in devellopement)

                commands: ${prefix}help
                use ${prefix} to call a command:
                ${prefix}ping                     //to get bot ping 
                ${prefix}nmap is <ip only>       // Scanning with intensive method
                ${prefix}nmap ps <ip only>      // FastPort Scan
                ${prefix}nmap qs <ip only>     // Scanning with Quick Scan method
                ${prefix}nmap isnp <ip only>  // Scanning with intensive no ping method
        ${codeblock}`);
    } 

    if (command === "ping") {
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`Lantency:  ${timeTaken}ms.`);
    } 
    if (command === "help") {
        message.reply(`
        ${codeblock}
                use ${prefix} to call a command:
                ${prefix}ping                      //to get bot ping 
                ${prefix}nmap is <ip only>        // Scanning with intensive method
                ${prefix}nmap ps <ip only>      // FastPort Scan
                ${prefix}nmap qs <ip only>     // Scanning with Quick Scan method
                ${prefix}nmap isnp <ip only>  // Scanning with intensive no ping method
        ${codeblock}`);
    }
    if (commandBody.startsWith("nmap vuln scan") === true ) {
        if (commandBody.match(/\blocalhost.|\b127.0.+|\b192.168.+|\b172.16.+/g)) {
            console.log("You're not allowed to do that");
            message.reply(`You're not allowed to do that`);
        } else {
        console.log(message.author.username, " asked ", commandBody);
        var reg_ip = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/g;
        var ip_target = commandBody.match(reg_ip);
        console.log(ip_target);
        message.reply(`${codeblock}Scanning with Vuln Scan method ${ip_target} with nmap ... (take time)${codeblock}`);
        exec(`nmap --script vuln ${ip_target}`, (err, stdout, stderr) => message.reply(`${codeblock}${stdout}${codeblock}`));
        }
    }
    if (commandBody.startsWith("check") === true ) {
        tradeOgre.getTicker('BTC-LTC', function(err, resp) {
        if (!err) {
            let price = resp;
            const body = JSON.parse(price);
            console.log(body);
            console.log(message.author.username, " asked ", commandBody);
            message.reply(`${codeblock}${body}${codeblock}`);
        } else {
            console.log(err)
        }
        });
    }
  });


// Ending console
client.login(config.BOT_TOKEN);