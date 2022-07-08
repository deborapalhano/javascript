idade = 28
console.log(`Você tem ${idade} anos .`)
if (idade < 16) {
    console.log('Não vota')
}
else if (idade < 18 || idade > 69) {
    console.log('Opcional')
}
else {

    console.log('Voto obrigatório')
}