/* Código jQuery para que modal funcione */

$(document).ready(function () {
	$('.modal').modal();

	$('.datepicker').pickadate({
		selectMonths: true, // Creates a dropdown to control month
		selectYears: 15, // Creates a dropdown of 15 years to control year
		onStart: () => {
			$('.picker').appendTo('body');
		}
	});

	$('[data-publication]').on('click', function (event) {
		let container = document.getElementById('main');
		let type = $(event.currentTarget).data('publication');
		publish(container, type);
	});
});

/* Código modal 1: para que se impriman los valores ingresados */

    
var btnPublicar = document.getElementById("btnPublicar");
	console.log(btnPublicar);

var titulo = document.getElementById("titulo").value;
	console.log(titulo);
var mensaje = document.getElementById("mensaje").value;
	console.log(mnensaje);

btnPublicar.addEventListener("click", agregarComentario);
console.log(btnPublicar);

function agregarComentario() {
	
	var node = document.createElement("li"); 
	node.appendChild(titulo);
	node.appendChild(mensaje);
	document.getElementById("lista").appendChild(node);
	console.log("lista");
}

/* Código modal 2: subir img */

var file = document.getElementById("file");

e.addEventListener("change", manejarSubida);

function manejarSubida() {
	var reader = new FileReader();
	reader.readAsDataURL(this.files[0])
	
	reader. onload = function() {
		var imagen = this.result;
		document.getElementById("imagen").setAttribute("src", imagen);
	}
}



/* Código modal 3: agregar evento */



