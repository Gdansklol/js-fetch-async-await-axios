// aync & await 

const getFruits = async () => {

    const response = await fetch('ica.json');
    const data = await response.json();
    // console.log(data);
    return data;
};

// getFruits();
// const test = getFruits();
// console.log(test);

console.log(1);
console.log(2);

getFruits()
.then(data => console.log('resolved:', data));

console.log(3);
console.log(4);

/** output: 1 2 3 4 resolved: (3) [{...},{...},{...}] */


// fetch("ica.json") 
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP-fel! Status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log("Data hämtad:", data);
//   })
//   .catch((err) => {
//     console.error("Hämtning misslyckades:", err);
//   });
