// callback2x

// const getFirstName = (callback) => {
//     setTimeout(() => {
//         callback("Binar")
//     }, 3000);
// }

// const getLastName = (panggilLagi) => {
//     setTimeout(() => {
//         panggilLagi("Academy")
//     }, 3000);
// }

// const handleOnClick = () =>{
//     console.log("Clicked...")
//     getFirstName(response => {
//         getLastName(result => {
//             const firsName = response
//             const lastName = result
//             const fullName = `${firsName} ${lastName}`

//             document.querySelector("#hasil").innerText = fullName
//         })
//     })
// }


// Promise

// const getFirstName = () => {
//     const promise =  new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             return(true) ?
//             resolve("Binar") : reject(Error("Gagal"))
//         }, 3000);
//     });
//     return promise;
// };

// const getLastName = (first) => {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             return(true) ?
//             resolve(`${first} Academy`) : reject(Error("Gagal"))
//         }, 3000);
//     });
// };



// const handleOnClick = () =>{
//     console.log("Clicked...")
//     getFirstName()
//     .then(hasil => getLastName(hasil))
//     .then(hasil2 => {
//         document.querySelector("#hasil").innerText = hasil2
//     })
//     .catch(error => console.log(error))

// }



// Promise All

const getFirstName = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            return(true) ?
            resolve("Binar") : reject(Error("Gagal"))
        }, 3000);
    });
    // return promise;
};

const getLastName = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            return(true) ?
            resolve("Academy") : reject(Error("Gagal"))
        }, 3000);
    });
};

const handleOnClick = () => {
    console.log("Clicked...")
    Promise.all([getFirstName(), getLastName()])
    .then(([hasil1, hasil2]) => {
            document.querySelector("#hasil").innerText = hasil1 + " " +hasil2
        })
}



// Async-wait

// const getFirstName = () => {
//     const promise =  new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             return(true) ?
//             resolve("Binar") : reject(Error("Gagal"))
//         }, 3000);
//     });
//     return promise;
// };

// const getLastName = () => {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             return(true) ?
//             resolve("Academy") : reject(Error("Gagal"))
//         }, 3000);
//     });
// };

// const handleOnClick = async () => {
//     console.log("Clicked...")
//     try{
//         const firstName = await getFirstName();
//         const lastName = await getLastName();
//         const fullName = `${firstName} ${lastName}`
    
//         document.querySelector("#hasil").innerText =  fullName;
//     } catch (error) {
//         console.log(error)
//     }
// }
