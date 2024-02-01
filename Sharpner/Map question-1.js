// Leetcode 
// 1) Two sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let mapOfNumbers = {};
    let twoIndexes = [];

    for (let i = 0; i < nums.length; i++) {
        mapOfNumbers[nums[i]] = i;
    }

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (mapOfNumbers[complement] !== undefined && mapOfNumbers[complement] !== i) {
            twoIndexes.push(i);
            twoIndexes.push(mapOfNumbers[complement]);
            break; // Stop the loop once we find the pair
        }
    }

    return twoIndexes;
};
