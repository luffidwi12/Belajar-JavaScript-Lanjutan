// CLOSURE

// function init(){
// 	let nama = 'sandhika';
// 	function tampilNama(){
// 		console.log(nama);
// 	}

// 	tampilNama();
// }
// init();

function ucapkanSalam(waktu){
	return function (nama){
		console.log(`Hallo ${nama}, selamat ${waktu}, semoga harimu menyenangkan!`);
	}
}

let selamatPagi = ucapkanSalam('pagi');
let selamatSiang = ucapkanSalam('siang');
let selamatSore = ucapkanSalam('sore');
let selamatMalam = ucapkanSalam('malam');

selamatPagi('Luffi');
selamatSiang('Daliana');