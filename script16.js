// $.ajax({
// 	url: 'https://www.omdbapi.com/?apikey=94103847=avengers',
// 	success: movies => console.log(movies)
// });


// Promise
// Object yang mempresentasikan keberhasilan / kegagalan sebuah event yang asynchrounous di masa yang akan datang
// janji (terpenuhi / ingkar)
// states (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)

// contoh 1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject)=>{
// 	if(ditepati){
// 		resolve('Janji telah ditepati!');
// 	}else{
// 		reject('Ingkar janji...');
// 	}
// });

// janji1
// .then(response => console.log('OK :' + response))
// .catch(response => console.log('NOT OK:' + response));

//contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject)=> {
// 	if(ditepati){
// 		setTimeout(()=> {
// 			resolve('Ditepati setelah beberapa waktu');
// 		}, 2000)
// 	}else{
// 		setTimeout(()=> {
// 			resolve('Tidak ditepati setelah beberapa waktu');
// 		}, 2000)
// 	}
// });

// console.log('mulai');
// janji2
// .finally(()=> console.log('Selesai Menunggu!'))
// .then(response => console.log('OK :' + response))
// .catch(response => console.log('NOT OK:' + response));
// console.log('selesai');


// Promise.all
const film = new Promise(resolve => {
	setTimeout(()=> {
		resolve([{
			judul: 'Avengers',
			sutradara: 'Muhamad Luffi',
			pemeran: 'irwan,apeng'
		}])
	}, 10000)
});

const cuaca = new Promise(resolve => {
	setTimeout(()=> {
		resolve([{
			kota: 'Bandung',
			temp: 26,
			kondisi: 'cerah berawan'
		}])
	}, 500)
});

// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

Promise.all([film,cuaca])
.then(response => {
	const [film,cuaca] = response;
	console.log(film);
	console.log(cuaca);
});

