// 1 + 2 + 3 + ... + (n - 1) + n
function calculoDemorado(n){
    let p  = new Promise(function(resolve, reject){
        let res = 0
        for(let i = 1; i <= n; i++) res += i
        resolve(res)
    })
    return p
}

let minhaPromise = calculoDemorado(100)
//then (computação com sucesso)
//catch computação com falha
minhaPromise.then((resultado) => console.log(resultado))
// function calculoDemorado(n){
//     let res = 0
//     for(let i = 1; i <= n; i++) res += i
//     return res
// }

// const resultado = calculoDemorado(100)
// console.log(resultado)
// console.log('outra coisa qualquer')



// const soma = (a, b) => {
//     return new Promise((resolve, reject) => {
        
//         //se a e b forem positivos 
//         //chamrar resolve passando a + b como parâmetro
//         //caso contrário
//         //chamar reject passando texto "não use negativos" como parâmetro
//         if(a > 0 && b > 0)
//         resolve(a + b)
//         else
//         reject('Não use negativos')
//     })
// }
// let res
// soma(2, 7).then(res => {
//     console.log('Resultado: ${res}')
// })
// .catch(erro => console.log ('Erro: ${erro}'))

// soma(-2, 5)
//     .then(res => {
//         console.log('Resultado: ${res}')
//         soma(2, 9)
//         .then(res => {
//             console.log(res)
//             soma(11, 13)
//             .then(res => console.log(res))
//             .catch(erro => console.log(erro))
//         })
//     .catch(erro => console.log(erro))
// })
//     .catch(erro => console.log ('Erro: ${erro}'))

    //descobrir como faz o catch

//1 + 2 + 3 + ... + n - 2 + n - 1 + n
// const calculoDemorado = (n) => {
//     let p = new Promise((resolve, reject) => {
//         let res = 0
//     for(let i = 1; i <= n; i++)
//     res += i
//         resolve(res)
//     })
//     return p
// }

// const aux = calculoDemorado(3)
// aux.then((resultado) => {
//     console.log(resultado)
// })





// const fs = require('fs')
// const abrirArquivo = (nomeArquivo) => {
//     const exibirConteudo = (erro, conteudo) => {
//         if(erro){
//             console.log('Erro: ${erro}')
//         }
//         else{
//             console.log(conteudo.toString())
//             const resultado = +conteudo.toString() * 10
//             const finalizar = (erro) => {
//                 if (!erro){
//                     console.log('Conteudo escrito com sucesso')
//                 }
//                 else{
//                     console.log('Escrita falhou')
//                 }
//             }
//             fs.writeFile('resultado.txt', resultado.toString(), finalizar)
//         }
//     }
//     fs.readFile(nomeArquivo, exibirConteudo)
// }
// abrirArquivo('arquivo.txt')


// const f1 = () => console.log('f1')
// const f2 = () => console.log('f2')

// setTimeout(f1, 500)
// setTimeout(f2, 500)
// console.log('fim do script principal')



// function demorada (){
//     //pegar o horário atual do sistema, e descolar ele de 2 segundos no futuro
//     const atualMais2Segundos = new Date().getTime() + 2000
//     while(new Date().getTime() <= atualMais2Segundos); //NO-OP: No operation
//     const d = 8 + 4
//     return d
// }

// const a = 2 + 5
// const b = 5 + 9
// setTimeout(function(){
//     const d = demorada()
//     console.log('d: ' + d)
// }, 500)

// const e = 2 + a + b
// console.log('e: ' + e)








// function demorada (){
//     //pegar o horário atual do sistema, e descolar ele de 2 segundos no futuro
//     const atualMais2Segundos = new Date().getTime() + 2000
//     while(new Date().getTime() <= atualMais2Segundos); //NO-OP: No operation
//     const d = 8 + 4
//     return d
// }

// const a = 2 + 5
// const b = 5 + 9
// const d = demorada()

// const e = 2 + a + b
// console.log(e)


// const a = 2 + 7
// const b = 5
// console.log(a + b)


// console.log('Eu primeiro')
// console.log('Agora eu')
// console.log('Sempre vou ser a última....:c')

//uma calculadora faz soma e subtração
//cada operação envolve dois operados
//soma deve utilizar arrow function, sem return
//subtracao deve ser funcao regular
// let calculadora = {
//     soma: (a, b) => a + b,
//     subtracao: function(a, b){
//         return a  +  b
//     }
// }


// console.log(calculadora.soma(2, 3))




//uma concessionária tem CNPJ e endereço. Ela possui alguns carros em estoque. Cada um deles tem
//marca, modelo e ano de fabricação
//acessar a marca do segundo veiculo

// let concessionaria = {
//     cnpj: '5812351253123',
//     endereco: {
//         logradouro: 'Rua J',
//         numero: 50,
//         bairro: 'Vila Estrela'
//     },
//     carros: [
//         {
//             marca: 'Ford',
//             modelo: 'Fiesta',
//             anoFabricacao: 2015

//         },

//         {
//             marca: 'VW',
//             modelo: 'Fusca',
//             anoFabricacao: 1975

//         },

//     ]
// }
// for (let carro of concessionaria.carros){
//     console.log('Marca: ${carro.marca}. Modelo: ${carro.modelo}')
// }


// console.log(concessionaria.carros.[1].marca)
// console.log(concessionaria['carros'][0]['marca'])



// let pessoa = {
//     CNPJ: 1234567,

//     endereco: {
//         logradouro: 'Rua A',
//         numero: 20
//     },

//     carros: {
//         marca: 'rovilson',
//         modelo: 'rovilson2.0',
//         anoF: 2010
//     }

// }


//se chama Maria, tem 21 anos e mora na rua B, 14
//objetos aninhados
// let pessoa = {
//     nome: 'Maria',
//     idade: 21,
//     endereco: {
//     logradouro: 'Rua B',
//     numero: '14'
//     }
// }
// console.log(pessoa['endereco']['logradouro'])
// console.log(pessoa.endereco.numero)
// console.log(pessoa['endereco'].numero)
// console.log(pessoa.endereco['logradouro'])
// console.log(pessoa.nome)
// console.log(pessoa.idade)

//Resposta 1:
// let pessoa = {
//     nome: 'Maria',
//     idade: 21,
//     endereco: 'rua B, 14' 
// }




//Uma pessoa chamada João que tem 17 anos de idade
//JSON; JavaScript Object Notation
// let pessoa = {
//     nome: 'João',
//     idade: 17
// }
// //. e[] para acessar membros
// console.log(pessoa.nome)
// console.log(pessoa['idade'])


///www.exemplo.com.br/livros
///GET
///função que acessa a base e devolve os livros

// const app = express ()

// app.get('/livros', () => {
    
// })

// function f(){}

// () => {}

// a => {return a * 2}

// let f = a => a * 2

// function f (a){
//     return a * 2
// }


// function eAgora (){
//     let cont = 1
//     function f1(){
//         console.log(cont)
//         cont++
//     }
//     cont++
//     function f2(){
//         console.log(cont)
//     }
//     return{f1, f2}
// }

// let eAgoraResult = eAgora()
// eAgoraResult.f1()
// eAgoraResult.f2()
// eAgoraResult.f1()


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