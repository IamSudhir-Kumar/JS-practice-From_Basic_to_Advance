// You are Given an array Sorted in ascending order. Find the Starting and ending Position of a given Target value.
// If target is not found in the array, return [-1, -1].
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Example 2:

// Input: nums = [5,7,7,8,8,8,8,8,8,10], target = 8
// Output: [3,8]

// Example 3:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums is a non-decreasing array.
// -109 <= target <= 109

///Solution/////////


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var element_search = function(nums, target) {
    const findLeftmost = (nums, target) => {
        let left = 0;
        let right = nums.length - 1;
        let result = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (nums[mid] >= target) {
                right = mid - 1;
                result = mid;
            } else {
                left = mid + 1;
            }
        }

        return result;
    };

    const findRightmost = (nums, target) => {
        let left = 0;
        let right = nums.length - 1;
        let result = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (nums[mid] <= target) {
                left = mid + 1;
                result = mid;
            } else {
                right = mid - 1;
            }
        }

        return result;
    };

    const leftmost = findLeftmost(nums, target);
    if (nums[leftmost] !== target) {
        return [-1, -1];
    }
    const rightmost = findRightmost(nums, target);
    return [leftmost, rightmost];
};


