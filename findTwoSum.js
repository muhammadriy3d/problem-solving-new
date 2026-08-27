const list = [2, 1, 5, 1, 3, 2]

const findTwoSum = (list, target) => {
    // know our position
    let left = 0
    let right = list.length - 1 
    
    while (left < right) {
        const currentSum = list[left] + list[right]

        if (currentSum == target) {
            return [list[left], list[right]]
        } 

        if (currentSum < target) {
            left += 1
        } else {
            right -= 1
        }
    }
}

console.log(findTwoSum(list, 7))
