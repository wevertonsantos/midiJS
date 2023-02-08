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

	// function for outside sound

	keys.onclick = function (){
		playSound(idAudio)
	};

}
