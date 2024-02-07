class Fibonacci {
  // generator, sistema de iteracao
  *execute(input, current = 0, next = 1) {
    // console.count('execute')
    if(input === 0) {
        return 0
    }
    // retorna o valor sobre demanda
    yield current
    // delega a funcao, sem retornar valor
    yield this.execute(input -1, next, current + next)
  }
}

module.exports = Fibonacci