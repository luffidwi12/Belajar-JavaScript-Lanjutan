// Rest Parameter

// function myFunc(...myArgs){
// 	// return `a = ${1}, b= ${2}, myArgs = ${myArgs}`;
// 	return myArgs;
// }

// console.log(myFunc(1,2,3,4,5))

// function jumlahkan(... angka){
	// let total = 0;
	// for(a of angka){
	// 	total += a;
	// }
	// return total;
// 	return angka.reduce((a,b) => a+b)
// }

// console.log(jumlahkan(1,2,3,4,5))


//Array Destructuring
// const kelompok1 = ['Muhamad Luffi', 'Muhamad Irfan', 'Muhamad Irwan', 'Dika', 'Dada'];
// const [ketua, wakil, ...anggota] = kelompok1;

// console.log(ketua, wakil, ...anggota);

// Object Destructuring
// const team = {
// 	pm: 'Muhamad Luffi Dwi Daliana',
// 	frontend1: 'Muhamad Irfan',
// 	frontend2: 'Andika Budi Prasetyo',
// 	backend: 'Muhamad Irwan',
// 	ux: 'Budi Setiawan',
// 	devOps: 'Arif Wahfiudin'
// }

// const {pm, ...myTeam} = team;
// console.log(pm, myTeam);

// filtering
function filterBy(type, ...values){
	return values.filter(v => typeof v === type);

}
console.log(filterBy('boolean',1,2,'luffi',false,10,true,'irwan'));