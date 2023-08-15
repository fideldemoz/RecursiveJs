function mergeSort (list) {
  if (list.length <= 1) {
    return list
  }

  let left = []
  let right = []

  for (const element in list) {
    if (element < (list.length) / 2) {
      left.push(list[element])
    } else {
      right.push(list[element])
    }
  }

  left = mergeSort(left)
  right = mergeSort(right)

  return merge(left, right)
}

function merge (left, right) {
  const result = []

  while (left.length !== 0 & right.length !== 0) {
    if (left[0] <= right[0]) {
      result.push(left[0])
      left = left.slice(1)
    } else {
      result.push(right[0])
      right = right.slice(1)
    }
  }

  while (left.length !== 0) {
    result.push(left[0])
    left = left.slice(1)
  }
  while (right.length !== 0) {
    result.push(right[0])
    right = right.slice(1)
  }

  return result
}

export { mergeSort }
