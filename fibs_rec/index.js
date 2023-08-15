function fibsRec (number) {
  const list = []

  const fib = function (number) {
    if (number < 2) {
      return number
    } else {
      return fib(number - 1) + fib(number - 2)
    }
  }

  for (let i = 0; i <= number; i++) {
    list.push(fib(i))
  }

  return list
}

module.exports = fibsRec
