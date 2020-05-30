const myArray = [1, 2, 3, 4, 5];
const myArray2 = ["a", "b", "c"];
const myArray3 = ["naranja", "limon", "kiwi"];
const myArray4 = ["Lunes", "Martes", "Miercoles"];

//! 1.- Array Operations-------------------------------

//* Head
//* Implementa una función head (inmutable), tal que, dado un array como entrada extraiga
//* y devuelva su primer elemento. Uliza destructuring.

const head = ([first, ...rest]) => {
  return first;
};
console.log("*********************");
console.log("head");
console.log(head(myArray));

//* Tail
//* Implementa una función tail (inmutable), tal que, dado un array como entrada
//* devuelta todos menos el primer elemento. Uliza rest operator.

const tail = ([first, ...rest]) => {
  return rest;
};

console.log("*********************");
console.log("tail");
console.log(tail(myArray));

//* Init
//* Implementa una función init (inmutable), tal que, dado un array como entrada
//* devuelva todos los elementos menos el último. Utiliza los métodos que ofrece
//* Array.prototype.

const init = ([...rest]) => {
  return rest.slice(0, rest.length - 1);
};
console.log("*********************");
console.log("init");
console.log(init(myArray));

//* Last
//* Implementa una función last (inmutable), tal que, dado un array como entrada
//* devuelva el úlmo elemento.

const last = ([...rest]) => {
  return rest[rest.length - 1];
};
console.log("*********************");
console.log("last");
console.log(last(myArray));

//! 2.- Concat
//* Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada,
//* devuelva la concatenación de ambos. Uliza rest / spread operators.

const concat = (a, b) => {
  //return [...a, ...b];

  const aux = [];

  console.log(a);
  console.log(b);

  if (a.length > 0) {
    for (const item of a) {
      aux.push(item);
    }
  }

  if (b.length > 0) {
    for (item of b) {
      aux.push(item);
    }
  }

  return aux;
};

console.log("*********************");
console.log("concat");
console.log(concat(myArray, myArray2));

//!----------------------------------------------------------

const concatMulti = (...args) => {
  let result = [];

  for (const item of args) {
    result = concat(result, item);
  }

  return result;
};

console.log("*********************");
console.log(concatMulti(myArray, myArray2, myArray3, myArray4));

//! 3.- Clone Merge

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

//* Clone
//? Implementa una función clone que, a partir de un objeto de entrada source devuelva
//? un nuevo objeto con las propiedades de source.

function clone(source) {
  return JSON.parse(JSON.stringify(source));
}

console.log("*********************");
console.log("clone");
console.log(clone(a));

//* Merge
//? Implementa una función merge que, dados dos objetos de entrada source y target,
//? devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso
//? de propiedades con el mismo nombre, source sobreescribe a target

const merge = (source, target) => {
  return Object.assign(target, source);
};

console.log("*********************");
console.log("merge");
console.log(merge(a, b));

//! 4.- Read Books
//* Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se
//* ha leído o no dicho libro.
//*
//* Un libro es un objeto con title como string y isRead como booleano. En caso de no
//* existir el libro devolver false
//* TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.

function isBookRead(books, titleToSearch) {
  for (const book of books) {

    if (book.title === titleToSearch)
      return book.isRead;
  }

  return false;
}

const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];
console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books,"Canción de hielo y fuego"));// false
console.log(isBookRead(books,"Los Pilares de la Tierra"));// false




