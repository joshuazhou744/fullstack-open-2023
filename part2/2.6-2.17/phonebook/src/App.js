import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/person'
import axios from 'axios'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [filterQuery, setFilterQuery] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialResult => {
        setPersons(initialResult)
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

      personService
        .create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
        })
        .catch(err => {
          console.log(err)
        })

      setNewName('')
      setNewNum('')
    }
  }

  const handleDelete = id => {
    personService
      .getDeletePerson(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
      })
      .catch(err => {
        console.log(err)
      })
  }


  return (
    <div>
      <h1>Phonebook</h1>

      <Filter query={filterQuery} handleChange={handleChange(setFilterQuery)}/>

      <h2>Add Contact</h2>
      
      <PersonForm name={newName} number={newNum} handleAdd={handleAddContact} handleName = {handleChange(setNewName)} handleNum = {handleChange(setNewNum)}/>
      
      <h2>Numbers</h2>
      
      <Persons persons={persons} query={filterQuery} handleDelete={handleDelete}/>

    </div>

  )
}


export default App
