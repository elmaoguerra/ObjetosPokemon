//Funcion que crear el objeto Pokemon
//Atributos: Nombre,Vida, Ataque, Grito
//Metodo: Gritar()
function Pokemon(nombre,vida,ataque){
	//Atributos
	this.nombre = nombre;
	this.vida = vida;
	this.ataque = ataque;
	this.grito = nombre + "!";
	//Metodos
	this.gritar = function(){
		alert(this.grito);
	}
}

//Funcion que retorna un número aleatorio entre 2 numeros
function aleatorio(min,max){
	return Math.floor(Math.random()*(max - min) + min);
}
//Funcion que crea varios Pokemon, los guarda en un arreglo,
//Elije uno aleatorio y muestra sus datos e imagen.
function crearPokemones(){
	
	var listaPokemon=[ new Pokemon("Pikachu",100,53),
			   new Pokemon("Charmander",80,40),
			   new Pokemon("Squirtle",90,33),
			   new Pokemon("Geodude",70,10)
						];
	var indice=parseInt(aleatorio(0,4));
	var pokeAleat=listaPokemon[indice];

	//Mostrar Datos en el archivo html
	nombrePoke.innerText = pokeAleat.nombre + ", yo te elijo!";
	datosPoke.innerText =	"Vida: " + pokeAleat.vida + "\n"+
						   	"Ataque: " + pokeAleat.ataque + "\n"+
							"Grito: " +pokeAleat.grito + "\n\n";
	pokeAleat.gritar();
	imagenPoke.setAttribute("src","imagenes/"+pokeAleat.nombre+".jpg");
}

