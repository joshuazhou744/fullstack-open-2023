const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

morgan.token('body', (request, resopnse) => 
request.method === 'POST' ? JSON.stringify(request.body) : '')

app.use(
    morgan((tokens, request, response) =>
    [
        tokens.method(request, response),
        tokens.url(request, response),
        tokens.status(request, response),
        tokens.res(request, response, 'content-length'), '-',
        tokens['response-time'](request, response), 'ms',
        tokens.body(request, response),
    ].join(' ')
    )
)

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]


app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/info', (request, response) => {
    const responseText = `
        Phonebook has infor for ${persons.length} people <br/>
        ${new Date()}
    `
    response.send(responseText)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)

    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

const generateId = () => {
    const maxId = persons.length > 0
        ? Math.max(...persons.map(p => p.id))
        : 0
    return maxId + 1
}

app.post('/api/persons', (request, response) => {
    const body = request.body
    const id = generateId()

    if (!body.number) {
        return response.status(400).json({
            error: "number is missing"
        })
    } else if (!body.name) {
        return response.status(400).json({
            error: "name is missing"
        })
    }

    const findPerson = persons.find(p => p.name === body.name)

    if (findPerson) {
        return response.status(400).json({
            error: "name must be unique"
        })
    }

    const person = {
        id,
        name: body.name,
        number: body.number
    }

    persons = persons.concat(person)
    response.json(person)
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)

    response.status(204).end()
})

const PORT = 3001

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`)
})