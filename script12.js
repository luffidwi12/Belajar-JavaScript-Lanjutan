// Spread Operator
// Memecah Iterable menjadi single element

// const mhs = ['Luffi', 'Apeng', 'Irwan'];
// console.log(...mhs[0]);

// Menggabungkan 2 Array
// const mhs = ['Luffi', 'Apeng', 'Irwan'];
// const dosen = ['Freddy', 'Agus', 'Harry'];
// const orang = [...mhs, ...dosen];
// console.log(orang);

// Meng-copy Array
// const mhs = ['Luffi', 'Apeng', 'Irwan'];
// const mhs1 = [...mhs];
// mhs1[0] = 'fajar';
// console.log(mhs); 

// const liMhs = document.querySelectorAll('li');
// const mhs = [];
// for (let i = 0; i < liMhs.length; i++){
// 	mhs.push(liMhs[1].textContent);
// }

// console.log(mhs);

// const mhs = liMhs.map(m => m.textContent);
// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs);

const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
console.log(huruf);
nama.innerHTML = huruf;

