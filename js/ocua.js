var iniciar =() =>{
	document.getElementById("texto").innerHTML = "Haciendo la consulta..."
	peticion()
}
var  peticion = () => {
	fetch('https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint8')
      .then(response => response.json())
      .then(json => imprimir(json))
}
var imprimir = (num)=>{
	resultado  = num.data[0]; 
	porcentaje = (resultado/255)*100
	sentencia  = (resultado> 255/2) ? "si":"no";
	document.getElementById("texto").innerHTML = "la respuesta es <span id='"+sentencia+"'>"+sentencia+"</span> con un "+porcentaje.toFixed(2)+"%"
	document.getElementById("boton").innerText = "Otra consulta"
}
