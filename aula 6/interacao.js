function interacao() {
      var nome = prompt("Informe o nome do aluno:");
      window.alert('Olá ' + nome + ', é um prazer te ver!');
      var primeira = prompt("Me informe o valor da primeira nota :");
      var segunda = prompt("Me informe o valor da segunda nota :");
      window.alert('Você tirou ' + primeira + ' na primeira prova, e tirou ' + segunda + ' na segunda prova!'); 
      var soma=primeira + segunda;
      window.alert('a soma é: ' + soma);
     
      var media = soma/2 ;
      window.alert('A média é: ' + media);   
    if(media >= 7) 
         if(media >= 9)
            alert('Uau, você foi aprovado com louvor! A sua média é: ' + media); 
         else
            alert('Parabéns, aprovado! A sua média é: ' + media);    
      else 
       alert('Puxa, você precisa estudar mais. Está reprovado! A sua média é: ' + media );   
    }
    function interacao() {
          var nome = prompt("Informe o nome do aluno:");
          window.alert('Olá ' + nome + ', é um prazer te ver!');
          var primeira = parseInt(prompt("Me informe o valor da primeira nota :"));
          var segunda = parseInt(prompt("Me informe o valor da segunda nota :"));
          window.alert('Você tirou ' + primeira + ' na primeira prova, e tirou ' + segunda + ' na segunda prova!'); 
          var soma=primeira + segunda;
          window.alert('a soma é: ' + soma);
         
          var media = soma/2 ;
          window.alert('A média é: ' + media); 
          if(media >= 7) 
     if(media >= 9)
        alert('Uau, você foi aprovado com louvor! A sua média é: ' + media); 
     else
        alert('Parabéns, aprovado! A sua média é: ' + media);    
  else 
   alert('Puxa, você precisa estudar mais. Está reprovado! A sua média é: ' + media );   
}

    