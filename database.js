/**
 * Modulo de conexão com o banco de dados
 * uso do framework mongoose
 */
// importação do mongoose
const mongoose =require('mongoose')

//conf do acesso banco de dados
// ip/link -> autenticação
// !! atlas(obter via compass)
// !!! para criar um banco de dados personalizado basta escolher um nome no final da url(ex dbclientes)
const url = 'mongodb+srv://admin:123Senac@projetoze.4iych.mongodb.net/dbclientes'

//criar variavel de apoio p/ validação

let conectado = false

//metodo p conectar o bando de dados
const conectar = async () => {
    // validação (se não tiver conectado, conecte.)
    if (!conectado) 
        // conectar c o banco
        // try catch - tratamento de excessões
        try {
            await mongoose.connect(url) // conectar
            conectado = true //setar a variavel
            console.log("MongoDb conectado")
        } catch(error){
            console.log(error)
        }
    }




    //metodo p desconectar o bando de dados
const desconectar = async () => {
    // validação (se tiver conectado, desconecte.)
    if (conectado) 
        // desconectar c o banco
        // try catch - tratamento de excessões
        try {
            await mongoose.disconnect(url) // conectar
            conectado = false //setar a variavel
            console.log("MongoDb desconectado")
        } catch(error){
            // se o erro for 8000 = autenticação
            if (error.code = 800) {
                console.log("Erro de autenticação")
            } else {
            console.log(error)
        }
    }
    }


// importar p/ main os metodos conectar e desconectar
module.exports = { conectar, desconectar};
