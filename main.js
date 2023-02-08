// function play sound

function playSound(idElementAudio){
	document.querySelector(idElementAudio).play();
}

// list

const listKeys = document.querySelectorAll('.tecla');

// for

for (let i = 0; i < listKeys.length; i++) {

	// constants

	const keys = listKeys[i];
	const instrumental = keys.classList[1];

	// idAudio (template string)

	const idAudio = `#som_${instrumental}`;

	// event and function for outside sound

	keys.onclick = function (){
		// playSound(idAudio)
		document.querySelector(idAudio).play();
	}

	// key on down and key on up

	keys.onkeydown = function(evento){
		
		if(evento.code === 'Space' || evento.code === 'Enter'){
			keys.classList.add('ativa');
		}
	
	}

	keys.onkeyup = function(){
			keys.classList.remove('ativa')
		}
}
