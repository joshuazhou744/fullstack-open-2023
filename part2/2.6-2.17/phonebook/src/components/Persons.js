const Persons = ({ persons, query, handleDelete }) => {
    return (
        <>
            {persons.filter(person => person && person.name && person.name.toLowerCase().includes(query))
            .map(person => (
            <div key={person.name}>
                {person.name} {person.number}
                <button onClick={ () => handleDelete(person.id)}>Delete</button>
            </div>
            ))}
        </>
    )
}

export default Persons