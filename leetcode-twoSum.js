//Given an array of integers, return indices of the two numbers such that they add up to a specific target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//Example:

//Given nums = [2, 7, 11, 15], target = 9,

//Because nums[0] + nums[1] = 2 + 7 = 9,
//return [0, 1].

//my solution:

arr = []; //we create an emptry array since the result should be returned as an array
var twoSum = function(nums, target) {
        for (i=0; i<nums.length; i++){
        for(j=1; j<nums.length; j++){
            if(nums[i]+nums[j]===target){
               arr.push(i);
               arr.push(j);
               return arr;
            }
        }
    }
    
};

//we have a nested for loop: first loop will parse through the given array so our count starts at index zero. 
//the second for loop starts count at index 1 and it will parse through the array and add each number to nums[i].
//if at any moment nums[i] + nums[j] equals target number, it means that we found our pair and we return indices for these two numbers.
//we push the correct indices to our empty array and return the updated array. 

