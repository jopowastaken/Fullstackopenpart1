const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

const Header = (props) =>{
  console.log(props)
  return(
    <h1>{props.course}</h1>
  )
}
const Content = (props) => {
  console.log(props)
  return(
    <p>
        {props.Content} {props.exnumber}
    </p>
  )

}
const Total = (props) => {
  console.log(props)
  return(
    <p>Number of exercises {props.amount1+props.amount2+props.amount3}</p>
  )

}

  return (
    <div>
      <Header course={course.name}/>
      <Content Content={course.parts[0].name} exnumber={course.parts[0].exercises} />
      <Content Content={course.parts[1].name} exnumber={course.parts[1].exercises} />
      <Content Content={course.parts[2].name} exnumber={course.parts[2].exercises} />
      <Total amount1={course.parts[0].exercises} amount2={course.parts[1].exercises} amount3={course.parts[2].exercises}/>
    </div>
  )
}

export default App