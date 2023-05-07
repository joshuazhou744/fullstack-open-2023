const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header name={course}/>
      <Content part1={part1} part2={part2} part3={part3}/>
      <Total num={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
};

const Header = (title) => {
  return (
    <>
      <h1>{title.name}</h1>
    </>
  )
};

const Part = (parts) => {
  return (
    <>
      <p>
        {parts.name1} {parts.num1}
        {parts.name2} {parts.num2}
        {parts.name3} {parts.num3}
      </p>
    </>
  )
};

const Content = (content) => {
  return (
    <>
      <Part name1={content.part1.name} num1={content.part1.exercises} />
      <Part name2={content.part2.name} num2={content.part2.exercises}/>
      <Part name3={content.part3.name} num3={content.part3.exercises} />
    </>
  )
};

const Total = (total) => {
  return (
    <>
      <p>Number of exercises {total.num}</p>
    </>
  )
};

export default App;
