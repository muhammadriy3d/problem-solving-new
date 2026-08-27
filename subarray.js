const list = [2, 1, 5, 1, 3, 2]

const subarray = (list) => {
    // identify the k
    const windowSize = 3
    
    // list length
    const listLength = list.length

    let maxNumbers = []
    
    // loop and take the k amount of the list each time and shift 1 index at each iteration
    for (let i = 0; i <= listLength - windowSize; i++) {
        // reset the total each time : fixed my bug when i make it outside the for loop, it was giving NaN after 1 index 
        let totalSubarray = 0
        const newTake = list.slice(i, i + windowSize)
        for (let n of newTake) {
            totalSubarray += n
        }
        maxNumbers = [...maxNumbers, totalSubarray]
    }
    
    // return the value
    return Math.max(...maxNumbers)
}

console.log(substring(list))
