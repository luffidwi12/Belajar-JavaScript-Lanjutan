// Cara membuat object pada javascript
// 1. Object Literal
// let mahasiswa1 = {
// 	nama: 'Muhamad Luffi Dwi Daliana',
// 	energy: 10,
// 	makan: function(porsi){
// 		this.energy = this.energy + porsi;
// 		console.log(`Hallo, ${this.nama}, Selamat Makan!`);
// 	}
// }

// let mahasiswa2 = {
// 	nama: 'Mohamad Irfan Manaf',
// 	energy: 20,
// 	makan: function(porsi){
// 		this.energy = this.energy + porsi;
// 		console.log(`Hallo, ${this.nama}, Selamat Makan!`);
// 	}
// }




// 2. function Declaration

// const methodMahasiswa = {
// 	makan: function (porsi) {
// 		this.energy += porsi;
// 		~console.log(`Hallo, ${this.nama}, Selamat Makan`)
// 	},

// 	main: function(jam){
// 		this.energy -= jam;
// 		console.log(`Hallo, ${this.nama}, Selamat Main!`);
// 	}

// }



// let luffi = new mahasiswa('luffi', 10);
// let irfan = new mahasiswa('irfan', 20);



// 3. Constructor Function
// 4. Object.Create

// function mahasiswa(nama, energy){
// 	this.nama = nama;
// 	this.energy = energy;
// }
// mahasiswa.prototype.makan = function (porsi){
// 	this.energy += porsi;
// 	return `Hallo ${this.nama}, Selamat Makan!`;
// }

// mahasiswa.prototype.main = function (jam){
// 	this.energy -= jam;
// 	return `Hallo ${this.nama}, Selamat Main`;
// }

// mahasiswa.prototype.tidur = function(jam){
// 	this.energy += jam * 2;
// 	return `Hallo ${this.nama}, Selamat Tidur!`;
// }

// let sandika = new mahasiswa('Sandika',10);

//versi class
class mahasiswa{
	constructor(nama,energi){
		this.nama = nama;
		this.energi = energi;
	}

	makan(porsi){
	this.energy += porsi;
	return `Hallo ${this.nama}, Selamat Makan!`;
}

main(jam){
	this.energy -= jam;
	return `Hallo ${this.nama}, Selamat Main`;
}

tidur(jam){
	this.energy += jam * 2;
	return `Hallo ${this.nama}, Selamat Tidur!`;
}
}

let sandika = new mahasiswa('Sandika',10);
let luffi = new mahasiswa('Luffi',20);