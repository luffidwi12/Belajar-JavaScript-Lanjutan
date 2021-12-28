// Konsep this pada arrow function

// Constructor Function
// const Mahasiswa = function(){
// 	this.nama = 'Muhamad Luffi';
// 	this.umur = 23;
// 	this.sayHello = function(){
// 		console.log(`Hallo nama saya ${this.nama}, saya berumur ${this.umur} tahun.`);
// 	}
// }

// const Luffi = new Mahasiswa();


// Arrow Function
// const Mahasiswa = function(){
// 	this.nama = 'Muhamad Luffi';
// 	this.umur = 23;
// 	this.sayHello = () => {
// 		console.log(`Hallo nama saya ${this.nama}, saya berumur ${this.umur} tahun.`);
// 	}
// }

// const Luffi = new Mahasiswa();




// Object Literal

// const Mhs1 = {
// 	nama: 'Muhamad Luffi',
// 	umur: 23,
// 	sayHello: function(){
// 		console.log(`Hallo nama saya ${this.nama}, saya berumur ${this.umur} tahun.`);
// 	}

// }





const box = document.querySelector('.box');
box.addEventListener('click', function(){
	let satu = 'size';
	let dua = 'caption';

	if(this.classList.contains(satu)){
		[satu,dua] = [dua,satu];
	}
	this.classList.toggle(satu);
	setTimeout(() => {
		this.classList.toggle(dua);
	}, 600);
});