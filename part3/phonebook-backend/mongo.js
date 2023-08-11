const mongoose = require('mongoose')

if (process.argv.length<3) {
    console.log('give password as argument')
    process.exit(1)
  }

const password = process.argv[2]
const url = `mongodb+srv://joshuazhou744:${password}@phonebook-db.xxubpqw.mongodb.net/phonebookApp?retryWrites=true&w=majority`

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

mongoose
    .connect(url)
    .then(() => {
        console.log('databse connected')

        if (process.argv.length === 3) {
            return Person.find({})
        } else if (process.argv.length === 5) {
            const newName = process.argv[3]
            const newNum = process.argv[4]

            const newPerson = new Person({
                name: newName,
                number: newNum,
            })

            return newPerson.save()
        }
    })
    .then(data => {
        if (process.argv.length === 3) {
            console.log('phonebook: ')
            data.forEach(person => {
                console.log(`${person.name} ${person.number}`)
            })
        } else if (process.argv.length === 5) {
            console.log(
                `added ${savedPerson.name} number ${savedPerson.number} to phonebook`
            )
        }

        mongoose.connection.close()
    })