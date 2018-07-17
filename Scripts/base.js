//Troca o audio para com/sem spoilers
function toggleSpoilers(){
	hard = !hard;
	setAllAudios();
}

//Evita que multiplos audios toquem ao mesmo tempo
function stopOthers () {
	var audios = document.getElementsByTagName("audio");
	var id = this.id;
	var i = 0;
	for (var j = audios.length; i < j; i++) {
		if (audios[i].id !== id) {
			audios[i].pause();
		}
	}
}

//arruma o volume, fonte e adiciona o stopOthers
function setAudio(pasta, elemento, arquivo){
	var audio = document.getElementById(elemento);
	var suxifHard = hard? " hard" : "";
	audio.src =pasta + '\\' + arquivo + suxifHard + '.mp3';	
	audio.addEventListener("play", stopOthers, false);
	audio.volume = 0.5;
}

//testa a resposta dada para ver se é correta
function test(numero){
	var resposta = respostas[numero-1];
	var input = document.getElementById("input" + numero);
	var btn = document.getElementById("btn" + numero);
    var tentativa = input.value;
	tentativa = tentativa.toLowerCase();
	tentativa = tentativa.replace('á','a');
	tentativa = tentativa.replace('é','e');
	tentativa = tentativa.replace('ó','o');
	tentativa = tentativa.replace('ê','e');
	tentativa = tentativa.replace('ô','o');
	tentativa = tentativa.replace('ç','c');
	tentativa = tentativa.replace(/[^A-Za-z0-9]/g,'');
	if (resposta.includes(tentativa)) {
		input.disabled = true;
		btn.disabled = true;
		btn.classList.remove('btn-secondary');
		btn.classList.remove('btn-danger');
		btn.classList.add('btn-success');
	}
	else
	{
		btn.classList.remove('btn-secondary');
		btn.classList.add('btn-danger');
	}
	return false;
}