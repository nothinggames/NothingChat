server_adress = 'http://62.4.13.113:3601'

function setCookie(name, value) {
	document.cookie = `${name}=${value}`
  }
function getCookie(name) {
	var value = "; " + document.cookie;
	var parts = value.split("; " + name + "=");
	if (parts.length == 2) return parts.pop().split(";").shift();
  }


function promptUsername(){
	alertify.prompt( 'Bienvenue !', 'Entrez un pseudo', ''
				   , function(evt, value) { pseudo = value 
					setCookie("username", pseudo)
					socket.emit('CONNECT', pseudo);
				}
				   , function() {
					setTimeout(function(){
						promptUsername();;
					}, 1);					
					});
}


function send(){
	text = getEntry()
	if (text != ""){
		setEntry("");
		socket.emit("MESSAGE", text)
		displayMessage(pseudo, text)
	}
}

var socket = io.connect(server_adress);
var pseudo;
pseudo = getCookie("username")
console.log(pseudo)
if(pseudo == undefined){
	promptUsername();
} else{
	socket.emit('CONNECT', pseudo);
}


socket.on('INFO', function(message) {
	alertify.success(message);
});

socket.on('MESSAGE', function(data) {
	//data = JSON.stringify(data)
	console.log(data)
	displayMessage(data.sender, data.message)
	
});

