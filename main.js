function playSoundPom(){
	document.querySelector('#som_tecla_pom').play()
}

// list

const listKeys = document.querySelectorAll('.tecla');

// function

listKeys[0].onclick = playSoundPom;