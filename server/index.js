const express=require('express')
const app=express()
require('dotenv').config()

const port=process.env.PORT ||6968

app.use(express.json());
app.use(express.static(`${__dirname}/../build`));


app.listen(port, ()=>{
    console.log('listening on ', port)
})

app.post('/appts', (req, res)=>{
    console.log(req.body, 'hit')
    res.status(200).send(req.body)
})


