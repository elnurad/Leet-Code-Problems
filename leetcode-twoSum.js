//Given an array of integers, return indices of the two numbers such that they add up to a specific target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//Example:

//Given nums = [2, 7, 11, 15], target = 9,

//Because nums[0] + nums[1] = 2 + 7 = 9,
//return [0, 1].

//my solution:



var twoSum = function(nums, target) {
    var arr = [];
    for (var i=0; i<nums.length; i++){
        for(var j=0; j<nums.length; j++){
            if(i!==j && nums[i]+nums[j]===target){
               arr.push(i);
               arr.push(j);
               return arr;
            }
        }
    }
    
};
//To solve the problem we first create an empty array where we can store returned indices.
//We have a nested for loop with a counter i and a counter j. We parshe through the array
//with nums[i] and if at any moment nums[i] + nums[j] equals target number, it means that we found our pair and we return indices for these two numbers.
//to ensure that the function does not add a number to itself, we set a condition that nums[i] should not be equal to nums[j]
//we push the correct indices to our empty array and return the updated array. 

