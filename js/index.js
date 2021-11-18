window.onload=inicio;
var credito=Math.floor(Math.random()*4)+15;
var imagenes=["uno.png","dos.png","tres.png","cuatro.png","cinco.png","seis.png","siete.png","ocho.png"];
var premios=[1,2,3,4,5,6,7,8];
var numeros_actuales=[];
var activos=false;

function inicio() {
	document.getElementById("tirar").onclick=lanzar_inicio;	
	document.getElementById("cruz").onclick=cerrar;	
	for (let k=0; k<document.getElementsByClassName("boton").length;k++){
		document.getElementsByClassName("boton")[k].onclick=lanzar_uno;
	}
	actualizar();
}
function lanzar_inicio() {
	if (credito>0){
		activos=true;
	numeros_actuales=[];
	for (let i = 0; i <3; i++) {
	numeros_actuales.push(escoger_numero(""));
	document.getElementsByClassName("imagen")[i].getElementsByTagName("img")[0].src="img/"+imagenes[numeros_actuales[i]];
	}

comparar();	
	}
}
function lanzar_uno() {
	if (credito>0 && activos==true){
	let hijos=this.parentNode.parentNode.children;
	for (let i=0;i<hijos.length;i++){	
		if(this.parentNode == hijos[i]){
			numeros_actuales[i]=escoger_numero(numeros_actuales[i]);
			document.getElementsByClassName("imagen")[i].getElementsByTagName("img")[0].src="img/"+imagenes[numeros_actuales[i]];
			comparar();
			break;
		}
	}
}
}
function escoger_numero(actual) {
	do{
		var num =  Math.round(Math.random() * (7 - 0) + 0);
		return num;
	} while(num==actual)
	return num;
}
function comparar() {
	if(numeros_actuales[0]==numeros_actuales[1] && numeros_actuales[1]==numeros_actuales[2]){
		//Hay premio, por fin porque no funciona ahora?
		activos=false;
		let p=premios[numeros_actuales[0]];
		let mensaje='Has conseguido las siguientes monedas:<div>';
		for(let k=0;k<p;k++){
			mensaje+='<img src="img/moneda.png">';
		}
	mensaje+='</div>';
	mostrar_mensaje(mensaje);
	credito+=premios[numeros_actuales[0]]
}
credito--;
actualizar();
}
function actualizar() {
	document.getElementById("dinero").innerHTML=credito;
	document.getElementById("monedas").innerHTML="";
	for(let k=1;k<=credito;k++){
		document.getElementById("monedas").innerHTML +='<img src="img/moneda.png">';
	}
	if (credito<1){
		mostrar_mensaje("<b>Has perdido</b><div class='subtitulo'>No tienes monedas</div>");
	}
	
}
function mostrar_mensaje(m) {
	document.getElementById("velo").style.display="flex";
	document.getElementById("mensaje").innerHTML=m;
}
function cerrar() {
	document.getElementById("velo").style.display="none";
}
	
	