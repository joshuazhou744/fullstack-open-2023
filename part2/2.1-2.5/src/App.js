const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

const Course = ({ course }) => {
  const parts = course.parts
  return (
    <div>
      <h1>{course.name}</h1>
      <div>
          {parts.map(parts =>
            <p key={parts.id}>{parts.name} {parts.exercises}</p>  
          )}
      </div>
    </div>
  )
}

export default App
