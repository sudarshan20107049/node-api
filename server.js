const express = require('express')
const app = express()


app.get('/',(req,res)=>{
    res.send('jhasj')
})

app.listen(4000,()=>{
    console.log('hello')
})