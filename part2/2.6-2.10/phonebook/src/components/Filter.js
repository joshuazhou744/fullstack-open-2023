const Filter = ({ query, handleChange }) => {
    return(
      <div>
        search: <input value={query} onChange={handleChange}/>
      </div>
    )
}

export default Filter