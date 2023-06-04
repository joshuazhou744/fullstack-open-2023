const PersonForm = ({ name, number, handleName, handleNum, handleAdd }) => {
    return (
        <form onSubmit={handleAdd}>
        <div>
          name: <input value={name}
          onChange={handleName}
          />
        </div>
        <div>
          number: <input value={number} onChange={handleNum}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm