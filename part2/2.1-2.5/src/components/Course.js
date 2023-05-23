const Course = ({ course }) => {

    const parts = course.parts
  
    const totalObj = parts.map(parts => parts.exercises)
    const total = totalObj.reduce((total, current) => total + current, 0)
  
    return (
      <div>
        <h1>{course.name}</h1>
        <div>
          {parts.map(parts =>
            <p key={parts.id}>{parts.name} {parts.exercises}</p>
          )}
          <p>total of {total} exercises</p>
        </div>
      </div>
    )
  }

  export default Course