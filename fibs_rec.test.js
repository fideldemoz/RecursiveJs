const fibsRec = require('./fibs_rec')

describe('fibsRec', () => {
  test('first 3 fibs', () => {
    expect(fibsRec(3)).toStrictEqual([0, 1, 1, 2])
  })
  test('a bit complex', () => {
    expect(fibsRec(8)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13, 21])
  })
})
