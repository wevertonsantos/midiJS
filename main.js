function playSoundPom(){
	document.querySelector('#som_tecla_pom').play()
}

function playSoundClap(){
	document.querySelector('#som_tecla_clap').play()
}

document.querySelector('.tecla_pom').onclick = playSoundPom;