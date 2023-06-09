import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/person'
import axios from 'axios'
import './index.css'
import personServices from './services/person'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [filterQuery, setFilterQuery] = useState('')
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialResult => {
        setPersons(initialResult)
      }).catch((err) => {
        console.log(err)
      })
  }, [])

  const newPerson = { name: newName, number: newNum }

  const handleChange = setValue => e => setValue(e.target.value)

  const handleAddContact = e => {
    e.preventDefault()
    const newPerson = { name: newName, number: newNum }
    const checkName = persons.find(props => props.name.toLowerCase() === newPerson.name.toLowerCase())
    const changedPerson = { ...checkName, number:newNum}

    if (checkName && checkName.number !== newPerson.number) {

      if(window.confirm(`${newName} is already added to phonebook, replace the old number with new one?`)) {
        personServices
          .updatePerson(checkName.id, changedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(n => n.id !== checkName.id? n : returnedPerson))
            setNewName('')
            setNewNum('')
            setTimeout(() => {
              setNotification(`number of ${newName} is changed`)
            }, 5000)
          })
          .catch(err => {
            setNotification(`Information of ${newName} has already been removed from server`)
          })
      }
    } else {
      const newPerson = { name: newName, number: newNum }

      personService
        .create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNotification(`Added ${newPerson.name}`)
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

  const handleReplace = id => {
    personService
      .updatePerson(id, newPerson)
      .then(() => {
        setPersons(persons.filter())
      })
  }

  const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className='error'>
        {message}
      </div>
    )
  }

  return (
    <div>
      <h1>Phonebook</h1>

      <Notification message={notification} />

      <Filter query={filterQuery} handleChange={handleChange(setFilterQuery)}/>

      <h2>Add Contact</h2>
      
      <PersonForm name={newName} number={newNum} handleAdd={handleAddContact} handleName = {handleChange(setNewName)} handleNum = {handleChange(setNewNum)}/>
      
      <h2>Numbers</h2>
      
      <Persons persons={persons} query={filterQuery} handleDelete={handleDelete}/>

    </div>

  )
}


export default App
