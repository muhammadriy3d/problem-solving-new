const list = [2, 1, 5, 1, 3, 2]

const subarray = (list) => {
    const windowSize = 3

    let currentSum = list.slice(0, windowSize).reduce((a, b) => a + b, 0)
    let maxSum = currentSum
    
    for (let i = windowSize; i < list.length; i++) {
        currentSum -= list[i - windowSize]
        currentSum += list[i]
    }
    maxSum = Math.max(maxSum, currentSum)
    
    return maxSum
}

console.log(subarray(list))
