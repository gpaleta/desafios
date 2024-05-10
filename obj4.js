let conta = {
    saldo1: 1000,
    saldo2: 1,
    saldo3: 1,
    titular: "gabriel alves",
    numdcon: 1,
    deposito: 500,
    saque:120
}
conta.saldo2 = conta.saldo1 + conta.deposito
conta.saldo3 = conta.saldo2 - conta.saque 
conta.dia1 = function(){
    return `no primeiro dia e tinha um saldo de ${conta.saldo1} meu chamo ${conta.titular} e tenho numero de conta ${conta.numdcon}`
}
conta.dia2 = function(){
    return `no segundo dia de um deposito e tinha um saldo de ${conta.saldo2}`
}
conta.dia3 = function(){
    return `no terceiro dia depois de um saque e tinha um saldo de ${conta.saldo3}`
}
console.log(conta.dia1())
console.log(conta.dia2())
console.log(conta.dia3())
