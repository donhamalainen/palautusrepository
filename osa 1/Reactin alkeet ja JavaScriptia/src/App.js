
const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <p>
    {props.content} {props.exercises}
    </p>
  )
}
const Content = (props) => {
  return (
    <>
    {props.parts.map((e) => {
      return <Part key={e.name} content={e.name} exercises={e.exercises} />
    })}
    </>
  )
}

const Total = (props) => {
  var total = 0;

  // .map on taulukko funktio ja forEach on jotain samankaltaista, mutta toimii tässä paremmin
  props.parts.forEach((e) => {
    total += e.exercises
  })
  return (
    <>
    <p >Number of exercises: {total}</p>
    </>
  )
}

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


  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App

