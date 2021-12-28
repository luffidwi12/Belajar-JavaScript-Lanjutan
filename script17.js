const coba = new Promise(resolve => {
    
    setTimeout(()=>{
        resolve('selesai')

    },2000);
});
console.log(coba);