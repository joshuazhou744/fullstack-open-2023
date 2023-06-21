import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [filterQuery, setFilterQuery] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log(response.data)
        setPersons(response.data)
      }).catch((err) => {
        console.log(err)
      })
  }, [])

  const handleChange = setValue => e => setValue(e.target.value)

  const handleAddContact = e => {
    e.preventDefault()

    if (persons.find(person => person.name === newName)) {
      alert(`${newName} already exists`)
    } else {
      const newPerson = { name: newName, number: newNum }

      axios
        .post('http://localhost:3001/persons', newPerson)
        .then(response => {
          setPersons(persons.concat(response.data))
        })
        .catch(err => {
          console.log(err)
        })

      setNewName('')
      setNewNum('')
    }
  }

  console.log(persons)

  return (
    <div>
      <h1>Phonebook</h1>

      <Filter query={filterQuery} handleChange={handleChange(setFilterQuery)}/>

      <h2>Add Contact</h2>
      
      <PersonForm name={newName} number={newNum} handleAdd={handleAddContact} handleName = {handleChange(setNewName)} handleNum = {handleChange(setNewNum)}/>
      
      <h2>Numbers</h2>
      
      <Persons persons={persons} query={filterQuery}/>

    </div>

  )
}


export default App
