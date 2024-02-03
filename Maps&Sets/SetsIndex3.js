// 3. **Problem: Subset Check**
//    Create a function that checks if one set is a subset of another.

function subsetCheck(set1 , set2) {
    return [set1].every(value => set2.has(value))
}
console.log(subsetCheck(new Set([1, 2]), new Set([1, 2, 3])));