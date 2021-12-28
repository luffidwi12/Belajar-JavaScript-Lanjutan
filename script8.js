// Template Literals / Temlate String

// const nama = 'Muhamad Luffi';
// const umur = 23;
// console.log(`Hallo, nama saya ${nama}, saya ${umur} tahun`);

// Embedded Expressions
// console.log(`${1+1}`);
// console.log(`${alert('hallo')}`);
// const x = 10;
// if(x % 2 == 0){
// 	alert(`${x} adalah bilangan genap`);
// }else{
// 	alert(`${x} adalah bilangan ganjil`);
// }
// console.log(`${(x % 2 == 0)? 'genap' : 'ganjil'}`);


// HTML Fragments
// const mhs = {
// 	nama: 'Muhamad Luffi',
// 	umur: 23,
// 	nim: '160511052',
// 	email: 'muhammadluffydwi@gmail.com'
// };

// const el = `<div class="mhs"> 
// 		<h2>${mhs.nama}</h2>
// 		<span class="nim">${mhs.nim}</span>
// 		<span class="umur">${mhs.umur}</span>
// </div>`;


// Looping
// const mhs = [
// 	{
// 		nama: 'Muhamad Luffi Dwi Daliana',
// 		email: 'muhammadluffydwi@gmail.com'
// 	},

// 	{
// 		nama: 'Muhamad Irfan Manap',
// 		email: 'irfan@gmail.com'
// 	},

// 	{
// 		nama: 'Muhamad Irwan',
// 		email: 'irwan@gmail.com'
// 	}

// ];

// const el = `<div class="mhs"> 
//  		${mhs.map(m => `<ul>
//  			<li>${m.nama}</li>
//  			<li>${m.email}</li>
//  		</ul>`).join('')}
//  </div>`;


// Conditional
//Ternary
// const lagu = {
// 	judul: 'Kau adalah',
// 	penyanyi: 'Isyana Sarasvati',
// 	feat: 'Rayi Putra'
// }

// const el = `<div class="lagu">
// 		<ul>
// 		<li>${lagu.penyanyi}</li>
// 		<li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
// 		</ul>
// </div>`


// 4. Nested
// HTML Fragments bersarang
const mhs = {
	nama: 'Muhamad Luffi Dwi Daliana',
	semester: 5,
	matakuliah: [
	'Rekayasa Web',
	'Analisis dan Perancangan Sistem informasi',
	'Pemrograman Sistem Informasi',
	'Pemrograman Sistem Berorientasi Object'
	]
};

function cetakMatakuliah(matakuliah){
	return `
	<ol>
		${matakuliah.map(mk => `<li>${mk}</li>`)}
	</ol>
	`
}

const el = `<div class="mhs">
	<h2>${mhs.nama}</h2>
	<span class="semester">Semester:${mhs.semester}</span>
	<h4>Matakuliah :</h4>
	${cetakMatakuliah(mhs.matakuliah)}
</div>`
document.body.innerHTML = el;
