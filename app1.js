// ASYNC/AWAIT:
//01
function delay(ms) {
 return new Promise(resolve => setTimeout(resolve, ms));
 }
 
 async function delayedGreeting(name) {
 await delay(2000);
 
 console.log(`Hello, ${name}!`);
 }
 delayedGreeting("John");
 
 
 //02
 function fetchData() {
 return new Promise(resolve => {
   setTimeout(() => {
     const data = { message: "Data fetched successfully" };
     resolve(data);
   }, 3000);
 });
 }
 
 async function getData() {
 const result = await fetchData();
 console.log(result);
 }
 getData();
 
 
 //03
  function delay(ms) {
     return new Promise(resolve => setTimeout(resolve, ms));
   }
   
   async function fetchhUserss() {
     await delay(4000)
   
     const usersss = [
       { id: 1, name: 'John' },
       { id: 2, name: 'Jane' },
       { id: 3, name: 'Alex' }
     ]
   
     return usersss
     }
   
     fetchhUserss()
     .then(users => {
       console.log(users);
   })
     .catch(error => {
       console.error('Error:', error);
     });
 
 
 //04
 async function fetchhhData(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  if (!response.ok) throw new Error('Error fetching data');
  return await response.json();
 }
 
 const id = 123
 
 fetchhhData(id)
  .then(dataaaa => {
    console.log(dataaaa)
  })
  .catch(error => {
    console.error('Error:', error);
  });
 
 
  //05
 function FeettchDataa(dataaaaa){
   return new Promise((resolve) => {
     setTimeout(() => {
       resolve(`Hello, ${dataaaaa}`)
 
     },5000);
   })
 }
 async function fetchessdata(){
 const dataaaaa=await FeettchDataa("message sent successfully")
 console.log(dataaaaa)
 }
 FeettchDataa()
   .then(dataaaaa => {
     console.log(dataaaaa)
   })
   .catch(error => {
     console.error('Error:', error);
   });
 fetchessdata()
 
 
 //06
 let counterss = 0;
 
 function timeout(valueee) {
  return new Promise((resolve) => {
    setTimeout(() => {
      counterss++;
      resolve({ counterss, valueee });
    }, 1000);
  });
 }
 
 async function asyncFunction(valueee) {
  console.log("Counter:", counterss);
  console.log("Argument:", valueee);
  return await timeout(valueee);
 }
 
 async function main() {
  for (let i = 1; i <= 10; i++) {
    const resulttss = await asyncFunction(i);
    console.log("Resolve value:", resulttss);
  }
 }
 main();