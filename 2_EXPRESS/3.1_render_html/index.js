const exprees = require('express')

const app= exprees()

app.get('/', (requisicao, resposta)=> {
    resposta.send('Seja bem vindo (a) ao meu serv!')

})

app.listen(3000, ()=> {
    console.log ("servidor rodando na porta 3000")
})

