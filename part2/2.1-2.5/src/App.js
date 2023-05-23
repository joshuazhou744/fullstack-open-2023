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
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

/* */

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

export default App
