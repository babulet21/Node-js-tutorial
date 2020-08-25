//const p =Promise.resolve({id:1});
//p.then(result=>console.log('result',result));

//const p = Promise.reject(new Error('reason for error'));
//p.catch(error=>console.log(error));

const p1 = new Promise((resolve)=>{
    setTimeout(()=>{
        console.log('calling API one....');
        resolve(1);
    });
});

const p2 = new Promise((resolve)=>{
    setTimeout(()=>{
        console.log('calling API two....');
        resolve(2);
    });
});

const p =Promise.all([p1,p2])
    .then(result=>console.log(result));

const p =Promise.race([p1,p2])
    .then(result=>console.log(result));


