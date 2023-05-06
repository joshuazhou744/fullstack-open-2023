const Hello = (props) => {
  console.log(props)
  return (
  <div>
    <p>Hello {props.name}, you are {props.age} years old.</p>
  </div>
  )
};

const App = () => {
  const name = "Josh"
  const age = 16

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name= 'Bob' age = {30+25} />
      <Hello name={name} age = {age} />
    </div>
  )
};

export default App;
