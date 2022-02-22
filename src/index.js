module.exports = function towelSort (matrix=[]) {
  if (matrix === []) {
    return []
  }
  let global = []
  matrix.forEach((element, index) => {
    if (index%2 !== 0) {
      element = element.sort(function(a,b) {
        return b - a
      })
    }
    element.forEach(e => {
      global.push(e)
    })
  });
  return global;
}