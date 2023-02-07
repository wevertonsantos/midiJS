// function play sound

function playSound(idElementAudio){
	document.querySelector(idElementAudio).play();
}

// list

const listKeys = document.querySelectorAll('.tecla');

// counter for while

	let i = 0;

// while

while (i < listKeys.length) {

	// constants

	const keys = listKeys[i];
	const instrumental = keys.classList[1];

	// idAudio (template string)

	const idAudio = `#som_${instrumental}`;

	// function for outside sound

	keys.onclick = function (){
		playSound(idAudio)
	};

	i = i + 1;
}