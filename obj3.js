let obj = {
    nome: "guacamole",
    preco: 12,
    estoque: 19,
    preco2:15,
    estoque2: 2
}
console.log(obj.nome)
console.log(obj.preco)
console.log(obj.estoque)
obj.descrever = function(){
    return `estamos vendendo ${obj.nome} está custando ${obj.preco} e temos um estoque de ${obj.estoque} ${obj.nome}`
};
obj.descrever2 = function(){
    return `agora depois de um dia estamos ainda vendendo ${obj.nome} está custando ${obj.preco2} e temos um estoque de ${obj.estoque2} ${obj.nome}`
};
console.log(obj.descrever())
console.log(obj.descrever2())