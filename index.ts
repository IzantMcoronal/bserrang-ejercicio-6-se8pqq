// En este ejercicio debéis crear una clase "Person" con las propiedades privadas "name" y "age" y la propiedad pública "saySomething". Añadid también el método "myNameIs" para que saque por consola el valor de la propidad "name".
//En su constructor, debéis dar un valor a cada propiedad (sin contar "myNameIs") teniendo claro que sus tipos son cadena de texto, número y función que recibe cadena y no devuelve nada, respectivamente.
// Luego, cread una clase "Developer" que herede de "Person" y que tenga la propiedad pública "bestLanguage". El tipo de la propiedad "bestLanguage" es función que recibe cadena y no devuelve nada.
// En el constructor de "Developer", debéis añadir los parámetros al constructor de la clase padre (super) y setear la propiedad "bestLanguage" sabiendo que es de tipo función que recibe una cadena.
// Cuando acabéis, debéis descomentar las siguientes líneas de código y colocarlas despúes de todo lo que añadáis:

//Creamos la clase person con sus propiedades
class Person {

  // Creamos la variable name de tipo string
  private name: string;

  // Creamos la variable age de tipo number
  private age: number;

  // Creamos la variable de tipo funcion de tipo string que no devuelva nada.
  public saySomething: (func: string) => void;

  //Creamos el constructor Sobrecargado
  constructor ( name: string, age: number, saySomething: (func: string) => void){
    this.name = name;
    this.age = age;
    this.saySomething = saySomething;
  }

//Creamos la funcion que no devuelve nada y saca por consola el nombre.
public myNameIs(): void {
  console.log(this.name);
}
}

// Creamos la clase Developer que extiende de Person
class Developer extends Person {

// Creamos la variable bestLanguage de tipo funcion de tipo string que nod evuelva nada.
public bestLanguage:(func: string) => void;

// Creamos el constructor sobrecargado
constructor (name: string, age: number, saySomething: (func: string) => void, bestLanguage: (func: string) => void){

// Utilizamos el atributo Super ya que extiende de person.
super( name, age, saySomething);

// seteamos el atributo 
this.bestLanguage = bestLanguage;
}

}

// Descomentamos este Bloque para ver el resultado final.
const developer = new Developer(
   "pedro",
   35,
   something => console.log(something),
   language => console.log(language + " is the best language")
 );

 developer.myNameIs();
 developer.saySomething('algo');
 developer.bestLanguage('Javascript');
