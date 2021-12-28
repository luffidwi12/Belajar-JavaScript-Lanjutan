// For .. of
// Array

// const mhs = ['Muhamad Luffi', 'Muhamad Irwan', 'Muhamad Irfan'];

// for(let i = 0; i < mhs.length; i++){
// 	console.log(mhs[i]);
// }

// for(const m of mhs){
// 	console.log(m);
// }


// String

// const nama = 'Muhamad Luffi';
// for(const m of nama){
// 	console.log(m);   
// }

// NodeList
// const liNama = document.querySelectorAll('.nama');
// liNama.forEach(n => console.log(n.innerHTML));

// for(n of liNama){
// 	console.log(n.innerHTML);
// }

//Arguments
// function jumlahkanAngka(){
// 	let jumlah = 0;
// 	for(a of arguments){
// 		jumlah += a;
// 	}
// 	return jumlah;
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// For..in
const mhs = {
	nama: 'Luffi',
	umur: 23,
	email: 'muhammadluffydwi@gmail.com'
}

for(m in mhs){
	console.log(mhs[m]);
}