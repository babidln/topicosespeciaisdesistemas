
//faz a request e pega do gitHub
function getJson(url) {
	var def = $.Deferred();
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        def.resolve(request.response);
    }
	return def.promise();
}

//seta os links
var links = {
	'faltas': 'https://gabrielsfcoelho.github.io/Json/JSON/Faltas.json',
	'pessoas': 'https://gabrielsfcoelho.github.io/Json/JSON/Pessoas.json',
	'notas': 'https://gabrielsfcoelho.github.io/Json/JSON/notas.json',
	'turma': 'https://gabrielsfcoelho.github.io/Json/JSON/turma.json'
}

//chama a request do github e salva faltas no localstorage para ser usado posteriormente
getJson(links['faltas']).then(function(data) {
	localStorage.setItem('faltas', JSON.stringify(data));
});

//chama a request do github e salva pessoas no localstorage para ser usado posteriormente
getJson(links['pessoas']).then(function(data) {
	localStorage.setItem('pessoas', JSON.stringify(data));
});

//chama a request do github e salva notas no localstorage para ser usado posteriormente
getJson(links['notas']).then(function(data) {
	localStorage.setItem('notas', JSON.stringify(data));
});

//chama a request do github e salva turma no localstorage para ser usado posteriormente
getJson(links['turma']).then(function(data) {
	localStorage.setItem('turma', JSON.stringify(data));
});