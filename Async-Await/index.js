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