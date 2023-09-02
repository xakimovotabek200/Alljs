//1. find(): Royxatdagi elementlarni tekshirib, berilgan shartga mos keluvchi birinchi elementni qaytaradi.
// let mevalar = [ "olma", "banan", "anjir", "shaftoli", "qulupnay" ];

// let natija = mevalar.find( function ( meva )
// {
//     return meva.length < 5;
// } );

// console.log( natija ); // "anjir"




//2. includes(): Berilgan elementni ro'yxatda qidiradi va u borligini yoki yo'qligini true yoki false qiymat bilan qaytaradi.
// Misol:
// let mevalar = [ "olma", "banan", "anjir", "shaftoli", "qulupnay" ];

// let natija = mevalar.includes( "banan" );

// console.log( natija ); // true


// //3. concat(): Bir nechta ro'yxatlarni birlashtirib yangi bir ro'yxat qaytaradi.
// Misol:
// let royxat1 = [ 1, 2, 3 ];
// let royxat2 = [ 4, 5, 6 ];

// let yangiRoyxat = royxat1.concat( royxat2 );

// console.log( yangiRoyxat ); // [1, 2, 3, 4, 5, 6]



// //4. unshift(): Ro'yxat boshiga yangi element(larni) qo'shadi va yangi ro'yxat uzunligini qaytaradi.

// let mevalar = [ "olma", "banan", "anjir" ];

// let uzunlik = mevalar.unshift( "shaftoli", "qulupnay" );

// console.log( mevalar ); // ["shaftoli", "qulupnay", "olma", "banan", "anjir"]
// console.log( uzunlik ); // 5


// // //5. some(): Ro'yxatdagi elementlarni tekshirib, kamida bitta element berilgan shartga mos keladimi yoki kelmasligini true yoki false qiymat bilan qaytaradi.
// Misol:
// let sonlar = [ 2, 4, 6, 8, 10 ];

// let natija = sonlar.some( function ( son )
// {
//     return son * 2;
// } );

// console.log( natija ); // false


let laptop = { name: "acer", model: "core", color: "silver", display: "felx" };
let laptop2 = { name: "acer", model: "seleren", color: "red", };

// console.log( Object.keys( laptop ) );//bu metod object ichidagi kalitlarni qaytaradi
// console.log( Object.values( laptop ) );//bu metod object ichidagi qiymatlar yani value qaytaradi
// console.log( Object.entries( laptop ) );//bu korinishdagi xolda 1 va 2 arrayni bitta qilib qaytarib yozib beradi
// let Laptops = Object.assign( {}, laptop, laptop2 );//bu yol bilna ikkala arrayni bir biriga qoshiladi
// console.log( Laptops );
let { name, color } = laptop;
console.log( name );

// shallow copy
let { ...newObject } = laptop;
let newObj = { ...laptop };
console.log( newObject, newObj );

//Deap copy

let object = {
    a: 1,
    b: {
        x: 10,
        y: 20,
    },
};

let DeapCopy = JSON.parse( JSON.stringify( object ) );
object.b.x = 'salom';
console.log( object );
console.log( DeapCopy );