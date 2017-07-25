triangulo = (function() {

	var segmentos = []

	//Completamos los angulos faltantes dentro de la tabla de datos
	var Angulos = function(ag){

		//consultamos si los angulos A y B tienen valores y C esta vacio
		if (ag.A && ag.B && !ag.C) {

			// Damos un valor al angulo C
			ag.C = -ag.A - ag.B + 180;

			// Regresamos el valor del angulo C
			return ag.C

		//consultamos si los angulos C y B tienen valores y A esta vacio
		}else if(ag.C && ag.B && !ag.A) {

			//Damos un valor a el angulo A
			ag.A = -ag.C - ag.B + 180;

			// Regresamos el valor de el angulo A
			return ag.A

		//consultamos si los angulos C y A tienen valores y B esta vacio
		}else if(ag.C && ag.A && !ag.B){

			//Damos un valor a el angulo B
			ag.B = -ag.C - ag.A + 180;

			// Regresamos el valor de el angulo B
			return ag.B
		}
	}

	var TrianguloRectangulo = function(ag){

		//Validamos si alguno de los angulos es de 90°
		if (ag.A === 90 || ag.B === 90 || ag.C === 90) {

			// Si esto se cumple regresamos True para decir que es angulo rectangulo
			return ag.AnguloRecto = true

		//Si no se cumple
		}else{

			//Si no hay angulo de 90° regresamos False para decir que no es un angulo rectangulo
			return ag.AnguloRecto = false
		}
	}

	var Hipotenusa = function(x){
		return "Esta es la Hipotenusa"
	}

	var init = function(x) {
		Angulos(x)
		if(TrianguloRectangulo(x)){
			Hipotenusa(x)
		}
	}

	return {
		init: init
	}
}())

segmentos = []
posx = 0;
posy = 0;
cl = 0;

// Entrada de la app
document.addEventListener('DOMContentLoaded', function() {
	document.querySelector("#plano").addEventListener("mousemove", function (e) {
		var x = e.clientX;
	    var y = e.clientY;

	    posx = x;
	    posy = y;
	    var coor = "X: " + x + ", Y:" + y;
	    document.querySelector("#data").innerHTML = coor;
	})

	document.addEventListener("click", function(e) {
		if (segmentos.length < 0) {

		}else{
			if (false) {
				console.log("mismas posiciones")
			}else{
				pos = []
				pos["x"] = posx
				pos["y"] = posy
				pos["NodoName"] = "A"
				segmentos.push(pos)
				x = document.querySelector("#plano")
				div = document.createElement("div")
				div.setAttribute("class", "point");
				div.setAttribute("style", "top:"+posy+"px; left:"+posx+"px;");
				hj = document.createElement("div")
				hj.setAttribute("class", "toltip")
				thj = document.createTextNode(cl)
				x.appendChild(div)
				div.appendChild(hj)
				hj.appendChild(thj)
				console.log(segmentos)
				cl++
			}
		}
	})


/*console.log(triangulo.init(
	{
		a	: 	Math.pow((segmentos[0] - segmentos[2]),2) + Math.pow((segmentos[1] - segmentos[3]),2),
		b	: 	16,
		c 	: 	18,
		A 	: 	60,
		B 	: 	32,
		C 	: 	90
	}
))*/
});




