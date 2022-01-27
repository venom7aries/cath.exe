//npm install nodejs-base64-converter --save

//"prefix encode text" for encoding
//"prefix decode encoded text" for decoding


//      BASE64  ENCODE

client.on('message', message => {
	const args = message.content.split(" ").slice(1);
	
if (message.content == `${process.env.PREFIX} encode ${args[0]}`)
  
   {
	   var nodeBase64 = require('nodejs-base64-converter');
var encoded = nodeBase64.encode(`${args[0]}`);

const encodeEmbed = new MessageEmbed()
	encodeEmbed.setTitle("Base64 Encode")
	encodeEmbed.addField(`**Input : **`, `${args[0]}`)
	encodeEmbed.addField(`**Output : **`, `${encoded}`)
  encodeEmbed.setFooter(`Tac Shadow | Team NYX`);

    message.channel.send(encodeEmbed);
  }
});


//      BASE64  DECODE

client.on('message', message => {
	const args = message.content.split(" ").slice(1);
	
if (message.content == `${process.env.PREFIX} decode ${args[0]}`)
  
   {
	   var nodeBase64 = require('nodejs-base64-converter');
var decoded = nodeBase64.decode(`${args[0]}`);

const decodeEmbed = new MessageEmbed()
	decodeEmbed.setTitle("Base64 Decode")
	decodeEmbed.addField(`**Input : **`, `${args[0]}`)
	decodeEmbed.addField(`**Output : **`, `${decoded}`)
  decodeEmbed.setFooter(`Tac Shadow | Team NYX`);

    message.channel.send(decodeEmbed);
  }
});


//feel free to remove client.on... and add module.exports... shit like the way you do.
