// Servidor 
 const express = require('express')
 const server = express()

 const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses

} = require('./pages')
 
 // conf nunjunks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// inicio e conf do servidor 
 server
 //receber os dados do req body
 .use(express.urlencoded({ extended: true }))
 // CONF ARQUIVOS ESTATICOS (CSS, SCRIPTS, IMAGENS)
 .use(express.static("public"))
 //ROTAS DE APLICACAO
 .get("/", pageLanding)
 .get("/study", pageStudy)
 .get("/give-classes", pageGiveClasses)
 .post("/save-classes", saveClasses)
 //start do servidor 
 .listen(5500) 

