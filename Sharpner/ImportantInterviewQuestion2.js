// LeetCode - 33
// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

//Solution///

var search = function (nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low < high) {
        const middle = Math.floor((low + high) / 2);
        if (nums[middle] == target) return middle;

        // If the left side is ordered
        if (nums[low] <= nums[middle]) {
            // Number is in the left side
            if (target >= nums[low] && target < nums[middle]) {
                high = middle;
            }
            // Number is in the right side
            else {
                low = middle + 1;
            }
        }
        // Right side is ordered
        else {
            // Number is in the right side
            if (target > nums[middle] && target <= nums[high]) {
                low = middle + 1;
            }
            // Number is in the left side
            else {
                high = middle;
            }
        }
    }

    // Reached the final number; return it if it matches the target, else target was not found
    return nums[low] == target ? low : -1;
};
