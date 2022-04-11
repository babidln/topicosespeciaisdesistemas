function create() {
    let a = document.createElement('p');
    a.textContent="12345678910";
    document.body.appendChild(a);
}
    const button= document.querySelectorAll('#botao1');
    for(var y= 0; y < button.length ; y++) {//alterado indice de i para X
    button[y].addEventListener('click', create);
}