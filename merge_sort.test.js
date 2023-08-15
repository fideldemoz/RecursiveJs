const mergeSort = require('./merge_sort')

describe('mergeSort', () => {
  test('short and simple array', () => {
    expect(mergeSort([3, 1, 2])).toStrictEqual([1, 2, 3])
  })
  test('with negative numbers', () => {
    expect(mergeSort([3, 1, 2, -2, -10, 10, 99])).toStrictEqual([-10, -2, 1, 2, 3, 10, 99])
  })
})
