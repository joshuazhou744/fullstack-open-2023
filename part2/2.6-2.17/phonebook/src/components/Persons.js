const Persons = ({ persons, query }) => {
    return (
        <>
            {persons.filter(person => person && person.name && person.name.toLowerCase().includes(query)).map(person => (
            <div key={person.name}>{person.name} {person.number}</div>
            ))}
        </>
    )
}

export default Persons