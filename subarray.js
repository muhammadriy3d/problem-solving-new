const list = [2, 1, 5, 1, 3, 2]

const subarray = (list) => {
    const windowSize = 3
    
    const listLength = list.length

    let currentSum = list.slice(0, windowSize).reduce((a, b) => a + b, 0)
    
    for (let i = windowSize; i < listLength; i++) {
        currentSum -= list[i - windowSize] + list[i]
    }
    maxNumber = Math.max([...maxNumbers, totalSubarray])
    
    return maxNumber
}

console.log(subarray(list))
