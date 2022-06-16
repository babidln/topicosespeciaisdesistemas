const dadosArmazenados = localStorage;
class Financas{
    constructor(){
        this.renderizarNomePessoaLogada();
        this.renderizarSubtituloSecretaria();
    }

    getUsuarioLogado() {
		var params = (new URL(document.location)).searchParams;
		return params.get('usuarioLogado');

	}
    renderizarNomePessoaLogada() {
		$('#PessoaLogada').html("Bem vindo Secretario(a) "+this.getUsuarioLogado());
	}

    renderizarSubtituloSecretaria(){
		$('#subtitulo').html("");
	}

}
var professor = new Professor();