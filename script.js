function adicionar(){

    let text = document.getElementById("texto").value;
    let list = document.getElementById("lista").innerHTML;


    list += "<li>" + "✅ " + text;
    document.getElementById("lista").innerHTML = list;
    document.getElementById("texto").value = null;

}

function reiniciar(){
    let reiniciar = document.querySelector("apagar");
    reiniciar =  location.reload();
}


