import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '040-1234567', 
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')

  const handleChange = setValue => e => setValue(e.target.value)

  const handleAddContact = e => {
    e.preventDefault()

    if (persons.find(person => person.name === newName)) {
      alert(`${newName} already exists`)
    } else {
      const newPerson = { name: newName, number: newNum }

      setPersons(persons.concat(newPerson))

      setNewName('')
      setNewNum('')
    }
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAddContact}>
        <div>
          name: <input value={newName}
          onChange={handleChange(setNewName)}
          />
        </div>
        <div>
          number: <input value={newNum} onChange={handleChange(setNewNum)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => (
        <div key={person.name}>{person.name} {person.number}</div>
      ))}
    </div>

  )
}


export default App
