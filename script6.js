const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// Mencari angka yang >= 3
// FOR
// const newAngka = [];
// for(let i = 0; i < angka.length; i++ ){
// 	if (angka[i] >= 3){
// 		newAngka.push(angka[i]);
// 	}
// }
// console.log(newAngka);



// FILTER
// const newAngka = angka.filter(function (a){
// 	return a >= 3;
// });
// console.log(newAngka);



// FILTER DENGAN ARROW FUNCTION
// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka);


// MAP
// kalikan semua angka dengan 2
// const newAngka = angka.map(a=> a*2);
// console.log(angka);
// console.log(newAngka);


// REDUCE
// jumlahkan seluruh elemen pada array
// -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
// const newAngka = angka.reduce((accumulator, currentValue)=> accumulator+currentValue);
// console.log(newAngka);

// METHOD CHAINING
// Cari angka > 5
// Kalikan 3
// jumlahkan
const hasil = angka.filter(a=> a > 5)
.map(a => a*3)
.map(a => a/2)
.reduce((acc, cur)=> acc+cur);
console.log(hasil);