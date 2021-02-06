const express = require('express')
const app = express()
const port = 3000
const Read = require('./controller/CRUD/read')
const Delete = require('./controller/CRUD/delete')
const Create = require('./controller/CRUD/create')
const Update = require('./controller/CRUD/update')
const Ordering = require('./controller/CRUD/ordering')
const Drop = require('./creates/drop')
const CreateDb = require('./creates/createDb')
const CreateTables = require('./creates/createTables')
const Join = require('./bonus/join/join')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/customers', (req, res, next) => {
    Read(res)
})

app.delete('/delete', (req, res, next) =>{
    Delete(res)
})

app.get('/createTables', async (req, res, next) =>{
    await CreateTables()
})

app.post('/seeders', async (req, res, next) =>{
    Create(res)
})

app.put('/update', (req, res, next) => {
    Update(res)
})

app.get('/ordered', (req, res, next) => {
    Ordering(res)
})

app.get('/drop', (req, res, next) => {
    Drop()
})

app.get('/createDb', async (req, res, next) => {
    await CreateDb(res)
})

app.get('/join', (req, res, next) => {
    Join(res)
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})