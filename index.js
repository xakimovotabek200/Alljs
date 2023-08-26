// Control structure
// if else
// switch case
// loops for & while

// let age = 15;

// if (age >= 16 && age < 18) {
//   console.log("Siz shariyat tomonidan nikohdan o'tishingiz mumkin");
// } else if (age >= 18) {
//   console.log("Siz davlat qoidalari bo'yicha nikohdan o'tishingiz mumkin");
// } else {
//   console.log("Siz hali voyaga yetmagansiz");
// }

// let word = "apple";

// switch (word) {
//   case "apple":
//     console.log("olma");
//     break;
//   case "pear":
//     console.log("nok");
//     break;
//   default:
//     console.log("bunday so'z topilmadi");
// }

// for (let a = 0; a < 5; a++) {
//   console.log(a);
// }

// let count = 0;

// while (count <= 5) {
//   console.log(count);
//   count++;
// }

// named function (deklerativ)
//anonymous function(Expression)
// arrow function
//constructor function
//IIFE (Immediately Invoked Function Expressions)

// function hello(shart, birinchi_qiymat, ikkinchi_qiymat) {
//     if (shart === "+") {
//       console.log(birinchi_qiymat + ikkinchi_qiymat);
//     } else if (shart === "-") {
//       console.log(birinchi_qiymat - ikkinchi_qiymat);
//     } else if (shart === "*") {
//       console.log(birinchi_qiymat * ikkinchi_qiymat);
//     } else {
//       console.log(birinchi_qiymat / ikkinchi_qiymat);
//     }
//   switch (shart) {
//     case "+":
//       console.log(birinchi_qiymat + ikkinchi_qiymat);
//       break;
//     case "-":
//       console.log(birinchi_qiymat - ikkinchi_qiymat);
//       break;
//     case "*":
//       console.log(birinchi_qiymat * ikkinchi_qiymat);
//       break;
//     case "/":
//       console.log(birinchi_qiymat / ikkinchi_qiymat);
//       break;
//     default:
//       console.log("Ushbu shartni bajara olmayman");
//   }
// }
// hello("/", 5, 10);

// const hello = function (name) {
//   console.log("Hello " + name);
// };

// hello("Muhammad");

// const hello = (name) => {
//   console.log("Hello " + name);
// };

// const hello = (name) => {
//   console.log("Hello " + name);
//   document.write(name);
// };

// hello("Abror");

// function Person(name, age) {
//   this.hello = function () {
//     console.log(Salom mening ismim ${name} va men ${age} yoshdaman);
//   };
// }

// let person1 = new Person("Abror", 14);

// person1.hello();

// (function () {
//   console.log("Bu funksiya yaratilishidan song darhol ishga tushadi");
// })();


// console.log( "salom" );


// OOP >object orentet proggramming
// Object Literals
// Construktor
// Prototypes
// claesses
// Inhertance
// const mashinalar = {
//   malumotlar: [
//     { tur: "Toyota", narx: 25000 },
//     { tur: "BMW", narx: 45000 },
//     { tur: "Mers", narx: 55000 },
//   ],

//   mashinaNarxi: function(tur) {
//     for (const mashina of this.malumotlar) {
//       if (mashina.tur === tur) {
//         return mashina.narx;
//       }
//     }
//     return "Mashina topilmadi";
//   },

//   narxniChiqarish: function(tur) {
//     const narx = this.mashinaNarxi(tur);
//     if (narx !== "Mashina topilmadi") {
//       return `${tur} mashinasining narxi: $${narx}`;
//     } else {
//       return narx;
//     }
//   }
// };

// const mashinaTur = "Mers";
// console.log(mashinalar.narxniChiqarish(mashinaTur));



// class Person
// {
//   constructor ( firstName, lastName, age )
//   {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   hello ()
//   {
//     console.log( `hello ${ this.firstName } ${ this.lastName }` );
//   }
// }

// let sodiqjon = new Person( 'otabek', 'khan', 15 )

// sodiqjon.hello()


// let Student = function ( name, age, fakultet )
// {
//   this.name = name;
//   this.age = age;
//   this.fakultet = fakultet;

//   this.hello = function ()
//   {
//     console.log( `hello ${ name } ${ age } ${ fakultet }` );
//   }
// }

// let func = new Student( 'otabek', 15, 'kimyo' )

// func.hello()

// class Avtomobil
// {
//   constructor ( tur, rang, yil, )
//   {
//     this.tur = tur;
//     this.rang = rang;
//     this.yil = yil;
//   }

//   mijozKeldi ()
//   {
//     if ( this.mijozlar >= 2 || this.rang === "red" && this.yil >= 2017 && this.yil <= 2023 )
//     {
//       console.log( "Sizga kerakli avtomobil bor!" );
//     } else
//     {
//       console.log( "unaqasi yoq!" );
//     }
//   }
// }

// const avto1 = new Avtomobil( "sedan", "red", 2022 );
// const avto2 = new Avtomobil( "mers", "red", 2020 );

// avto1.mijozKeldi();
// avto2.mijozKeldi();

// class Person
// {
//   constructor ( name )
//   {
//     this.name = name;
//   }

//   hello ()
//   {
//     console.log( `salom ${ this.name }` );
//   }
// }

// class Student extends Person
// {
//   constructor ( name, grade )
//   {
//     super( name )
//     this.grade = grade;
//   }
//   getGrade ()
//   {
//     console.log( `mening yoshim ${ this.grade }` );
//   }
// }

// let student = new Student( "ali", 10 );

// class Kitob
// {
//   constructor ( nomi )
//   {
//     this.nomi = nomi;
//   }
// }

// class Kutubxona
// {
//   constructor ( nomi )
//   {
//     this.nomi = nomi;
//     this.kitoblar = [];
//   }

//   narsaQoshish ( narsa )
//   {
//     this.kitoblar.push( narsa );
//   }

//   kitoblarniKorish ()
//   {
//     console.log( `${ this.nomi }da quyidagi narsalar mavjud:` );
//     this.kitoblar.forEach( ( narsa, indeks ) =>
//     {
//       console.log( `${ indeks + 1 }. "${ narsa.nomi }"` );
//     } );
//   }
// }

// const kutubxona = new Kutubxona( "romanlar" );
// const yangiNarsa = new Kitob( "aokp" );



// kutubxona.narsaQoshish( yangiNarsa );

// kutubxona.kitoblarniKorish();



// let a = 5;
// let b = 10;

// document.getElementById( "salom" ).innerHTML = `<h1>${ a + b }</h1>`

// function calc ( a, b )
// {
//   a = document.getElementById( "one" ).value;
//   b = document.getElementById( "two" ).value;
//   let c = parseInt( a )
//   let d = parseInt( b )
//   document.querySelector( "p" ).innerHTML = d + c
// }
// function calcs ( a, b )
// {
//   a = document.getElementById( "ones" ).value;
//   b = document.getElementById( "twos" ).value;
//   let c = parseInt( a )
//   let d = parseInt( b )
//   document.querySelector( "h1" ).innerHTML = d / c
// }
// function calcn ( a, b )
// {
//   a = document.getElementById( "onen" ).value;
//   b = document.getElementById( "twon" ).value;
//   let c = parseInt( a )
//   let d = parseInt( b )
//   document.querySelector( "h2" ).innerHTML = d * c
// }
// function calcq ( a, b )
// {
//   a = document.getElementById( "oneq" ).value;
//   b = document.getElementById( "twoq" ).value;
//   let c = parseInt( a )
//   let d = parseInt( b )
//   document.querySelector( "h3" ).innerHTML = c - d
// }
// function calculate ( operation )
// {
//   const a = document.getElementById( "one" ).value;
//   const b = document.getElementById( "two" ).value;
//   const c = parseInt( a );
//   const d = parseInt( b );

//   let result;
//   if ( operation === 'add' )
//   {
//     result = c + d;
//   } else if ( operation === 'subtract' )
//   {
//     result = c - d;
//   } else if ( operation === 'multiply' )
//   {
//     result = c * d;
//   } else if ( operation === 'divide' )
//   {
//     result = c / d;
//   }

//   document.getElementById( "result" ).innerHTML = `Result: ${ result }`;
// }

// function clearResult ()
// {
//   document.getElementById( "result" ).innerHTML = "Result: 0";
// }
// btn.addEventListener( "click", function ()
// {
//   calculate( "add" );
// } );


// let p = document.getElementById( "result" );
// p.innerHTML = "salom Finished"

// let btn = document.getElementById( "btn" );


// btn.setAttribute( "disabled", "disabled" );

// let link = document.getElementById( "link" );
// let url = "http://youtube.com"
// link.setAttribute( "href", url );

// let newElement = document.createElement( "p" );
// newElement.innerHTML = "YouTube"
// document.body.appendChild( newElement );
// document.body.appendChild( newElement, p );
// // document.body.removeChild( newElement );
// newElement.remove()

// const addButton = document.getElementById( "addButton" );
// const container = document.getElementById( "container" );

// addButton.addEventListener( "click", function ()
// {
//   const newDiv = document.createElement( "div" );
//   newDiv.textContent = "Yangi div";
//   container.appendChild( newDiv );
// } );
// class Cart
// {
//   constructor ()
//   {
//     this.cart = {};
//     this.total = 0;
//   }

//   _addToCart ( product )
//   {
//     const productId = product.sku;
//     this.cart[ productId ] = this.cart[ productId ] || { name: product.name, price: product.price, quantity: 0 };
//     this.cart[ productId ].quantity++;
//     this._calculateTotal();
//     this._updateCart();
//   }

//   _removeFromCart ( sku )
//   {
//     if ( this.cart[ sku ] )
//     {
//       this.cart[ sku ].quantity--;
//       if ( this.cart[ sku ].quantity === 0 )
//       {
//         delete this.cart[ sku ];
//       }
//       this._calculateTotal();
//       this._updateCart();
//     }
//   }

//   _clearCart ()
//   {
//     this.cart = {};
//     this.total = 0;
//     this._updateCart();
//   }

//   _calculateTotal ()
//   {
//     this.total = Object.values( this.cart ).reduce( ( sum, item ) => sum + item.quantity * item.price, 0 );
//   }

//   _updateCart ()
//   {
//     const cart = document.querySelector( '#cart' );
//     cart.innerHTML = '';

//     for ( const [ sku, item ] of Object.entries( this.cart ) )
//     {
//       const cartItem = document.createElement( 'li' );
//       cartItem.className = 'cart-item';

//       const cartItemText = document.createElement( 'span' );
//       cartItemText.innerText = `${ item.name } x${ item.quantity } - ${ item.quantity * item.price }`;

//       const removeButton = document.createElement( 'button' );
//       removeButton.className = 'action-remove';
//       removeButton.innerText = 'Remove';
//       removeButton.setAttribute( 'data-sku', sku );

//       cartItem.appendChild( cartItemText );
//       cartItem.appendChild( removeButton );
//       cart.appendChild( cartItem );
//     }

//     const total = document.createElement( 'span' );
//     total.innerText = `Total: ${ this.total }`;

//     const clearButton = document.createElement( 'button' );
//     clearButton.className = 'action-clear';
//     clearButton.innerText = 'Clear Cart';
//     clearButton.addEventListener( 'click', () => this._clearCart() );

//     cart.appendChild( clearButton );
//     cart.appendChild( total );

//     const removeButtons = document.querySelectorAll( '.action-remove' );
//     removeButtons.forEach( ( button ) =>
//     {
//       button.addEventListener( 'click', ( event ) =>
//       {
//         const sku = event.target.getAttribute( 'data-sku' );
//         this._removeFromCart( sku );
//       } );
//     } );
//   }
// }

// class Product
// {
//   constructor ( sku, name, price, cart )
//   {
//     this.sku = sku;
//     this.name = name;
//     this.price = price;
//     this.cart = cart;
//   }

//   _addItem ()
//   {
//     const menuItem = document.createElement( 'li' );
//     menuItem.className = 'menu-item';

//     const menuText = document.createElement( 'span' );
//     menuText.className = 'menu-text';
//     menuText.innerText = `${ this.name } - $${ this.price }`;

//     const actionAdd = document.createElement( 'button' );
//     actionAdd.className = 'action-add';
//     actionAdd.innerText = 'Add';
//     actionAdd.setAttribute( 'data-sku', this.sku );

//     menuItem.appendChild( menuText );
//     menuItem.appendChild( actionAdd );
//     document.querySelector( '#menu1' ).appendChild( menuItem );

//     actionAdd.addEventListener( 'click', () => this.cart._addToCart( this ) );
//   }
// }

// const cart = new Cart();

// const mouse = new Product( '451312231', 'Mouse', 299, cart );
// mouse._addItem();
// const keyboard = new Product( '60230123', 'Keyboard', 599, cart );
// keyboard._addItem();
// const monitor = new Product( '53204324', 'Monitor', 599, cart );
// monitor._addItem();


let btn = document.getElementById( "submit" );

// btn.addEventListener( "click", () =>
// {
//   alert( "salom" )
// } )

// btn.onclick = function ()
// {
//   alert( "sakom" )
// }


// let box = document.getElementById( "box" )

// box.addEventListener( "mouseover", function ()
// {
//     box.style.width = "400px"
// } )

// box.addEventListener( "mouseout", function ()
// {
//     box.style.width = "200px"
// } )



// // Get all the dropdown from document
// document.addEventListener( "DOMContentLoaded", function ()
// {
//     const dropdowns = document.querySelectorAll( ".dropdown" );

//     dropdowns.forEach( dropdown =>
//     {
//         dropdown.addEventListener( "mouseover", function ()
//         {
//             this.querySelector( ".dropdown-content" ).style.display = "block";
//         } );

//         dropdown.addEventListener( "mouseout", function ()
//         {
//             this.querySelector( ".dropdown-content" ).style.display = "none";
//         } );
//     } );
// } );
// let navbarToggle = document.querySelector( '.navbar-toggle' );
// let icon = document.querySelector( '.icon' );
// let navbarNav = document.querySelector( '.navbar-nav' );

// navbarToggle.addEventListener( 'mouseover', function ()
// {
//     navbarNav.classList.toggle( 'show' );
//     icon.classList.toggle( 'open' );
// } );


// navbarToggle.addEventListener( 'mouseout', function ()
// {
//     navbarNav.classList.toggle( 'show' );
//     icon.classList.toggle( 'open' );
// } );


const hamburger = document.querySelector( ".hamburger" );
const navMenu = document.querySelector( ".nav-menu" );

hamburger.addEventListener( "click", () =>
{
    hamburger.classList.toggle( "active" );
    navMenu.classList.toggle( "active" );
} )

document.querySelectorAll( ".nav-link" ).forEach( n => n.addEventListener( "click", () =>
{
    hamburger.classList.remove( "active" );
    navMenu.classList.remove( "active" );
} ) )