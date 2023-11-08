let bottone = document.getElementById("aggiungi");
bottone.addEventListener('click', addElement);


function addElement(){
    let ul = document.querySelector("ul");
    let elementLista = document.getElementById("elementoLista").value;
    let inputField = document.getElementById("elementoLista");
    if(elementLista !== ""){
    let li = document.createElement("li");
    li.innerHTML = `${elementLista}`
    ul.appendChild(li);
    let idexId = document.querySelectorAll("li")
    for(i = 0 ; i < idexId.length; i++){
        li.removeAttribute("id");
        li.setAttribute("id",`${i}`)
        li.innerHTML = `<img onclick="elimina(${i})" src="assets/trash-outline.svg" alt="cestino"> ${elementLista}`
    }
    inputField.value = '';
}
else{
    alert("Devi inserire un task");
}

}

var lista = document.querySelector('ul');
    lista.addEventListener('click', function(x) {
    if (x.target.tagName === 'LI') {
        x.target.classList.toggle('line');
    }
    }, false);

function elimina(x){
    document.getElementById(x).remove();
}
