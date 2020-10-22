// Callback
// const getUser = (id, callback) => {
//     setTimeout(() => {
//       if (!id) {
//         return callback(Error("Invalid ID"))
//       }

//       let response;
//       if (id > 10) {
//         response = {
//           sucess: false,
//           id: id,
//           message: "User Not Found!"
//         }
//       } else {
//         response = {
//           sucess: true,
//           id: id,
//           message: "User Found"
//         }
//       }

//       return callback(response);
//     }, 2000)

//   }

//   const promisChain = () => {
//     console.log("Clicked...")
//     getUser(11, (result) => {
//       const dataUser = result
//       console.log(dataUser)
//       document.querySelector("#hasil2").innerText = dataUser
//     })
//   }

// Promise Chaining
const getUser = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!id) {
        reject(Error("Invalid ID"));
      }
      let response;
      if (id > 10) {
        resolve(
          (response = {
            sucess: false,
            id: id,
            message: "User Not Found!",
          })
        );
      } else {
        resolve(
          (response = {
            sucess: true,
            id: id,
            message: "User Found",
          })
        );
      }
    }, 2000);
  });
};

const promiseChain = () => {
  console.log("Clicked...");
  getUser(11)
    .then((hasil) => {
      document.querySelector("#hasil2").innerText = hasil.message;
      console.log(hasil);
    })
    // .then((hasil) => console.log(hasil))
    .catch((error) => console.log(error));
};

const promiseAll = () => {
  console.log("Clicked...");
  Promise.all([getUser(11)]).then(([hasil1]) => {
    document.querySelector("#hasil3").innerText = hasil1.message;
    console.log(hasil1);
  });
};

const asyncWait = async () => {
  console.log("Clicked...");
  try {
    const User = await getUser(11);
    console.log(User);
    document.querySelector("#hasil4").innerText = User.message;
  } catch (error) {
    console.log(error);
  }
};
