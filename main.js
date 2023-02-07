// function play sound

function playSoundPom(){
	document.querySelector('#som_tecla_pom').play()
}

// list

const listKeys = document.querySelectorAll('.tecla');

// counter for while

	let i = 0;

// while

while (i < listKeys.length) {

	listKeys[i].onclick = playSoundPom;

	i = i + 1;
	console.log(i)
}