const express = require ('express')
const app = express()

//GET => enva informações do back-end para o front-end
//post => recebe informações do front para o back-end 

app.get ("/", (requisicao, resposta)=>{
    resposta.send('este é o meu beck-end')

})

app.listen(3000, () => {
    console.log('servidor rodando na porta 3000')
})