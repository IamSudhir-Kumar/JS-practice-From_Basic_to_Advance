///anagram

function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let counter = {}
  for (let letto of str1) {
    counter[letto] = (counter[letto] || 0) + 1; 
  }
  console.log(counter)
  for (let ite of str2){
    if(!counter[ite]){
        return false;
    }
    counter[ite]-=1
  }
  return true
}
const why = anagram("hello", "llohe");
console.log(why)