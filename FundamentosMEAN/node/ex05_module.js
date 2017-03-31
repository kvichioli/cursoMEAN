console.log(global === this)
console.log(module === this)
console.log(module.exports === this)


this.digaOi = function(){
  console.log('opa2')
}

module.exports.digaOi = function(){
  console.log('opa1')
}
