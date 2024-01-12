// const express = require('express')
import express from 'express'
const app = express()
const hostname = 'localhost'
const port = 8028
app.get('/', function(req,res) {
    res.send('<h6>Hello World NodeJS Yushing Dev</h6>')
})

app.listen(port, hostname, () => {
    console.log(`Hello YuShingDev, I'm running sever at http://${hostname}:${port}/`)
})