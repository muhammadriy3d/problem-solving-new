const list = [2, 1, 5, 1, 3, 2]

const findTwoSum = (list, target) => {
    const isValueThere = new Map()

    for (let i = 0; i < list.length; i++) {
        const currentValue = list[i]
        const resultsCurrent = target - currentValue

        if (isValueThere.has(resultsCurrent)) 
              return [resultsCurrent, currentValue]; 

        isValueThere.set(currentValue, i)
    }
}

console.log(findTwoSum(list, 7))
