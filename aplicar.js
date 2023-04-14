var menu_visible = false; 
let menu = document.getElementById("nav");
function mostrarOcultarmenu(){

    if (menu_visible==false) {
menu.style.display = "block";
menu_visible = true;       
    }else{
        menu.style.display = "none";
        menu_visible = false;
    }
}let links = document.querySelectorAll("nav a");
for (let x = 0; x < links.length; x++) {
    links[x].onclick = function(){

        menu.style.display="none"
    }
    
}

function crearBarra(id_barra){
    for (let i = 0; i <= 16; i++) {
        let div = document.createElement("div");
        div.className="e";
        id_barra.appendChild(div);
        
    }


}

let html = document.getElementById("html")
crearBarra(html);
let mySql = document.getElementById("mySql")
crearBarra(mySql);



let contadores = [-1,-1,-1,-1,-1]
let entro = false; 

function efectoHabilidades(){
    var habilidades=document.getElementById("habilidades");
    var distancia_skill=window.innerHeight-habilidades.getBoundingClientRect().top;
    
    
    if (distancia_skill>=300 && entro==false) {
        entro==true
        const intervalhtml = setInterval(function(){
            pintarBarra(html, 10, 0, intervalhtml);
        },100);
        const intervalsql = setInterval(function(){
            pintarBarra(mySql, 6, 1, intervalsql);
        },100);
  
    }
    }



function pintarBarra(id_barra, cantidad, indice, interval){
contadores[indice]++;
x=contadores[indice];
if(x<cantidad) {
    let elementos = id_barra.getElementsByClassName("e");
    elementos[x].style.backgroundColor= "#696";

}else{
    clearInterval(interval)

}
}
window.onscroll = function(){
    efectoHabilidades();
}

