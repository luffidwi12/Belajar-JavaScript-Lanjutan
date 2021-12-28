// Destructuring Variable Assigment

// Destructuring Array

// const perkenalan = ['Hallo', 'Nama', 'Saya', 'Muhamad Luffi'];

// const [salam, satu, dua, nama] = perkenalan

// skipping items
// const [salam,,,nama] = perkenalan;
// console.log(nama);

// swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a,b] = [b,a];
// console.log(a);
// console.log(b);

// Return value pada function
// function coba(){
// 	return[1,2];
// }

// const [a,b] = coba();
// console.log(a,b);

// Rest Parameter
// const [a,...value] = [1,2,3,4,5];
// console.log(a);
// console.log(value);

// Destructuring Object
// const mhs = {
// 	nama: 'Muhamad Luffi Dwi Daliana',
// 	umur: 23
// }

// const {nama, umur} = mhs;
// console.log(nama);
// console.log(nama, umur);

// Assigment Tanpa Deklarasi Object
// ({nama, umur} = {nama: 'Muhamad Luffi', umur: 23});
// console.log(nama);

//Assign Ke Variabel Baru
// const mhs = {
// 	nama: 'Muhamad Luffi',
// 	umur: 23
// }

// const {nama: n, umur: u} = mhs;
// console.log(n);

// Memberikan Default Value
const mhs = {
	nama: 'Muhamad Luffi Dwi Daliana',
	umur: 33
}
const {nama, umur, email = 'muhammadluffydwi@gmail.com'};
console.log(email);
