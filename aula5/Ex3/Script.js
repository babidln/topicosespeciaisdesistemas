function Numeros() {
    let contador = 0
    do {
        let num = document.createElement('p');
        num.textContent =  contador + 1;
        document.body.appendChild(num);
        contador ++;
    } while (contador < 10);
}

function DebitoTecnico() {
    let info = document.createElement('p');
        info.textContent = 'O Debito Técnico é um conceito relacionado com a falta de padronização em um código';
        document.body.appendChild(info);
}
// const botao= document.querySelectorAll('button');
   // for(var y= 0; y < botao.length ; y++) {
   // botao[y].addEventListener('click');
   // }
function Sonar() {
        window.open("https://www.sonarqube.org/")
            }
    function Jenkins() {
        window.open("https://www.jenkins.io/")
            }