///what is async?
async function getData() {
  return "Rolls-Royce";
}
console.log(getData());//It will return a promise even when its not because of async keyword [Async always returns a promise]
//But what should we do if we want tro return only that value from that promise
const data = getData();

data.then((res) => console.log(res)); //this will return the value which is wrap around the promise

//what is Await?
const r = new Promise((resolve,reject) => {
    resolve("Rolls royce is a best car in the world");
});

async function handlePromise(){
    const car = await r;
    console.log(car);
}
handlePromise();

//Using both Asyn-await
const p1 = new Promise((resolve , reject) => {
  setTimeout(() => {
    resolve("First time with promise");
  } , 10000)
});
async function wayPromise() {
  console.log(await p1);
  //JS engine will wait here to promise to be resolved
}
wayPromise();
//What happens if we use two promises together in a single function with two different time-out

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Second Time with promise but different time out")
  } , 4000)
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Third Time with promise but different time out")
  } , 2000)
});
async function youPromise(){
  console.log(await p2);
  console.log(await p3);
}
youPromise()
