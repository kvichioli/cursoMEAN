function temParam(param){
  return process.argv.indexOf(param) !== -1
}

if(temParam('--producao')){
  console.log('encontrou')
}else{
  console.log('nao encontrado')
}
