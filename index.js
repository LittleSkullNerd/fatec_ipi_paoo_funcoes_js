// //funções
function eAgora (){
    let cont = 1
    function f1(){
        console.log(cont)
        cont++
    }
    cont++
    function f2(){
        console.log(cont)
    }
    return{f1, f2}
}

let eAgoraResult = eAgora()
eAgoraResult.f1()
eAgoraResult.f2()
eAgoraResult.f1()


// function saudadesFactory (saudacao, nome){
//     saudacao = 'Ola'
//     return function(){
//         console.log('${saudacao}, ${nome}')
//     }
// }

// let olaJoao = saudacoesFactory('Olá', 'João')
// let tchauJoao = saudacoesFactory ('Tchau', 'João')
// olaJoao()
// tchauJoao()

// function ola(){
//     let nome = 'João'
//     return function(){
//         console.log('Olá, ${nome}')
//     }
// }

// let olaResult = ola ()
// olaResult()


// function f(){
//     let nome = 'João'
//     function g(){
//         console.log(nome)
//         oi = 'oi'
//     }
//     console.log(oi)
//     g()
// }
// f()

// function f(funcao){
//    return funcao() //g
// }
// function g(){
//     function outraFuncao(){
//         console.log ("Fui definida por g")
//         return () => {2}
//     }
//     return outraFuncao()
// }

// f(g)()

// let umaFuncao = function (){
//     console.log ("Fui armazenada em uma variável")
// }
// umaFuncao()

// const resultadoDaG = g()
// resultadoDaG()
// g()()()

// f(function(){
//     console.log("Estou sendo passada para f...")
// })

// function produzUmaFuncao(a, b, operador){
//     if (operador === '+')
//     return function(a, b){
//         a + b
//     }
//     if (operador === '-'){
//     return (a, b) => a - b
//     }
// }


// function executa(f) {
//     f()
// }
// executa(function(a, b) {return a +b})


// public class Teste {
//     public void m() {

//     }
//     public void testando() {
//         var meuMetodo = m;
//     }
// }


// function f3 (){

// }
// console.log(f3())

// const hello = () => console.log("Hello")
// hello()

// const dobro = valor => valor * 2

// let triplo = (valor) => {
//     return valor * 3
// }

// const ehPar = n => {n % 2 === 0}
// console.log(ehPar(10))

// const f = () => {}
// const umArgumento n => {
//     console.log(n)
// }

// const soUmaLinha = () => console.log("oi")

// const teste1 = (a, b) => {
//     return a + b
// }

// const teste2 = (a, b) => a + b

// const dobro = function (n){
//     return 2 * n
// }

// const result = dobro (6)
// console.log(result)

// //valor padrão para um parâmetro
// const triplo = function(n = 5){
//     return 3 * n
// }
// console.log(triplo())
// console.log(triplo(10))

// function soma (a, b) {
//     return a + b
// }
// const resultado = soma(2, 3)
// console.log(resultado)

//void m() {} se fosse Java
// function hello(){
//     console.log('oi')
// }
// hello()
// function hello(nome){
//     console.log('oi, ' + nome)
// }
// hello('Rodrigo')



//declaração
// v1 = []
// console.log(v1.length)
// v1[0] = 3.4
// console.log(v1.length)
// v1[10] = 2
// console.log(v1.length)
// v1[2] = 'abc'
// console.log(v1.length)
// v1[99] = true
// console.log(v1.length)
// console.log(v1)
// for (let i = 0; i < v1.length; i++){
//     console.log(v1[i])
// }

// int [] new int[0];
//var v1 = new ArrayList<int>();

//você não quer usar o operador de comparação =
// a = 2
// a = undefined
// console.log([] == [])
// console.log([] == false)
// console.log(null == undefined)
// console.log (null == null)
// console.log (1 == [1, 1])
// console.log (21 == [2, 1])
// console.log (1 == [2, 1])
// console.log (1 == [1, 2])
// console.log (1 == [2])
// console.log (1 == [1])
// console.log (1 == true)
// console.log(1 === '1')
// console.log(1 === 1)
// console.log(1 == '1')
// console.log  1 == 1)

// const n1 = 2
// const n2 = '3'
// //coerção implícita
// const n3 = n1 + n2
// console.log(n3)
// //coerção explícita
// const n4 = n1 + Number (n2)
// console.log(n4)


//String a = "1"; //java, estaticamente tipado, feito pelo compilador
//a.falar()
//let = a "abc javascript, dinamicamente tipado, feito pelo interpretador, em tempo de execução"
//a.falar()

// var idade = 18
// console.log("Oi, ${nome}")
// if (idade >= 18){
//     var nome = "João" //içamento (hoist)
//     console.log("Parabéns, ${nome}. Você pode dirigir!")
// }

// console.log("Até mais, ${nome}")


//var linguagem = "Javascript"
//console.log('Aprendendo ${linguagem}')
//var linguagem = "Java"
//console.log("Aprendendo ${linguagem}")


//let nome = "Luciana"
//console.log(nome)
//nome = "Jhonis"
//console.log(nome)

//let a = 2
//console.log(typeof (a))
//a = "abc"
//console.log(typeof (a))
//a = true
//console.log(typeof (a))


//declarar constantes
//Java: String nome = "Luciana"
//const nome - "Luciana"
//console.log(nome)
//nome = "Luciana"
//const endereco - 'Rua B, 21'
//console.log(endereco)
//const sobrenome = 'Sonoda'
//console.log(sobrenome)
//Me chamo Luciana. Meu sobrenome é Sonoda
//console.log('Me chamo ' + nome + '. Meu sobrenome é' + sobrenome)
//console.log('Me chamo ${nome}. Meu sobrenome é ${sobrenome}.')
//const idade = 18
//const passeiDeAno = true