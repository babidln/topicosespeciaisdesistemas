function percorrer() {
    let count = 0
    do {
        let para = document.createElement('p');
        para.textContent = count+ 1;
        document.body.appendChild(para);
        count ++;
    } while (count < 10);
}
function mostrarTexto(texto) {
        var display = document.getElementById(texto).style.display;
        if(display == "none")
            document.getElementById(texto).style.display = 'block';
        else
            document.getElementById(texto).style.display = 'none';
    }