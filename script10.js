// Destructuring

// function kalkulasi(a,b){
// 	return [a+b, a-b, a*b, a/b];
// }

// const jumlah = penjumlahanPerkalian(2, 3)[0];
// const kali = penjumlahanPerkalian(2, 3)[1];
// console.log(kali);

// const [jumlah, kali] = penjumlahanPerkalian(2,3);
// console.log(jumlah);
// console.log(kali);

// const [jumlah, kurang, kali, bagi = 'Tidak Ada'] = kalkulasi(2,3);
// console.log(jumlah);
// console.log(kurang);
// console.log(kali);
// console.log(bagi);



// function kalkulasi(a,b){
// 	return{
// 	tambah: a + b,
// 	kurang: a - b,
// 	kali: a * b,
// 	bagi: a / b
// 	}
	
// }

// const {bagi, kurang, kali, tambah} = kalkulasi(2,3);
// console.log(kurang);


// Destructuring Function Arguments

const mhs1 = {
	nama: 'Muhamad Luffi',
	umur: 23,
	email: 'muhammadluffydwi@gmail.com',
	nilai: {
		tugas: 80,
		uas: 85,
		uts: 75
	}
}

function cetakMhs({nama, umur, nilai:{tugas, uas, uts}}){
	return (`Hallo nama saya ${nama}, umur saya ${umur} dan nilai uas saya ${tugas}`)
}

console.log(cetakMhs(mhs1));

