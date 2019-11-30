function addMessage(parent, id, user, text){
	var li = document.createElement("li");
	var span = document.createElement("span");

	span.className = "message";
	span.id = `MESSAGE${id}`;

	addTitle(span, id, user);
	addContent(span, id, text);
	parent.appendChild(li);
	li.appendChild(span);	

	li.style.listStyleImage = `url(https://api.adorable.io/avatars/10/${user.split(' ').join('')}.png)`;	
}

function addTitle(parent, id, user){
	var element = document.createElement("h5");
	element.id = `LINE${id}-TITLE`
	element.innerHTML = user
	parent.appendChild(element);	
}

function addContent(parent, id, text){
	var element = document.createElement("p");
	element.id = `LINE${id}-MESSAGE`
	element.innerHTML = text
	parent.appendChild(element)
}

function getEntry(){
	return document.getElementById("entry").value
}
function setEntry(text){
	document.getElementById("entry").value = text
}

function displayMessage(user, text){
	count++
	var parent = document.getElementById("messages")
	addMessage(parent, count, user, text)
	parent.scrollTop = parent.scrollHeight;
}

var count = 0
