const dadosArmazenados = localStorage;
class Financas{
    constructor(){
        this.renderizarTurmas();
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
		$('#subtitulo').html("text");
	}

    renderizarCorpoDaTabela(){
        var financas = JSON.parse(dadosArmazenados.getItem("pessoas")).alunos
        console.log(financas)
        $('#tbody').html("")
        $('#tbody').apped(
            $.map(financas, function(financas){
                `<tr>
                    <td>${aluno.nome}</td>
                    <td>${$('#selectMaterias').val()}</td>
                    <td>X</td>
                </tr>`
            })
        )
    }

renderizarDisciplinas(){
    var disciplinas, function (disciplina){

    }
}

    renderizarTurmas(){
        var turmas = JSON.parse(locaslStorage.getItem('turma'))['Turmas'];
        $.map(Object.keys(turmas), function (turma){
            $('#turmas').append(`<option value="${turma}>${turma}</option>`);
        });
    }


}
var professor = new Professor();
$("#selectMaterias3").on('change', function(){
    that.renderizarCorpoTabela()
    
})