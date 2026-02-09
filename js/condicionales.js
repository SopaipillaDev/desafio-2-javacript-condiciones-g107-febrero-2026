// Desafío 1

// Variables para primer ejercicio.
let objetoSelccionado = false;
const imagenConBorde = document.getElementById("imagenSeleccionada");

// Variables para el tercer ejercicio.

function cambiarBorde()
{
	if(objetoSelccionado)
	{
		// Podemos aplicar css directamente en JS.
		// Podemos usar parámetros en la propiedad 'border'.
		console.log("La imagen ha sido seleccionada con el booleano " + objetoSelccionado);
		imagenConBorde.style.border = "none";
		objetoSelccionado = !objetoSelccionado;
		console.log("Ahora el booleano es " + objetoSelccionado);
	}
	else if(!objetoSelccionado)
	{
		// Podemos aplicar css directamente en JS.
		// Podemos usar el parámetro none para eliminar el borde.
		console.log("La imagen ha sido seleccionada con el booleano " + objetoSelccionado);
		imagenConBorde.style.border = "5px solid red";
		objetoSelccionado = !objetoSelccionado
		console.log("Ahora el booleano es " + objetoSelccionado);
	}
}



// Desafío 2

// Variables para el segundo ejercicio.

let cantidadStickers1 = document.getElementById("cantidad1");
let cantidadStickers2 = document.getElementById("cantidad2");
let cantidadStickers3 = document.getElementById("cantidad3");

let textoStickers = document.getElementById("textoStickers");

let cantidadTotalStickers = 0;

function calcularCantidadStickers()
{
	// Asignación de valores en cada variable.
	cantidadStickers1 = parseInt(document.getElementById("cantidad1").value);
	console.log("La cantidad del primer sticker es " + cantidadStickers1);
	cantidadStickers2 = parseInt(document.getElementById("cantidad2").value);
	console.log("La cantidad del segundo sticker es " + cantidadStickers2);
	cantidadStickers3 = parseInt(document.getElementById("cantidad3").value);
	console.log("La cantidad del tercer sticker es " + cantidadStickers3);

	cantidadTotalStickers = parseInt(cantidadStickers1 + cantidadStickers2 + cantidadStickers3);
	console.log("La cantidad total de stickers es " + cantidadTotalStickers);
	verificarCantidadStickers();
}

function verificarCantidadStickers()
{
	if(cantidadTotalStickers <= 10)
	{
		textoStickers.textContent = "Llevas " + cantidadTotalStickers + " stickers";
	}
	else if(cantidadTotalStickers > 10)
	{
		textoStickers.textContent = "Llevas demasiados stickers";
	}
}

// Desafío 3

let codigoClave1 = document.getElementById("clave1");
let codigoClave2 = document.getElementById("clave2");
let codigoClave3 = document.getElementById("clave3");

let combinacionClave = "";

let textoCombinacionClave = document.getElementById("textoClave");

function verificarClave()
{
	codigoClave1 = document.getElementById("clave1").value;
	console.log("El valor del primer código es " + codigoClave1);
	codigoClave2 = document.getElementById("clave2").value;
	console.log("El valor del segundo código es " + codigoClave2);
	codigoClave3 = document.getElementById("clave3").value;
	console.log("El valor del tercer código es " + codigoClave3);

	combinacionClave = codigoClave1 + codigoClave2 + codigoClave3;
	console.log("La combinación de la clave es " + combinacionClave);

	autentificarClave();
}

function autentificarClave()
{
	if(combinacionClave === "911")
	{
		textoCombinacionClave.textContent = "password 1 correcto";
	}
	else if(combinacionClave === "714")
	{
		textoCombinacionClave.textContent = "password 2 correcto";
	}
	else
	{
		textoCombinacionClave.textContent = "password incorrecto";
	}	
}












