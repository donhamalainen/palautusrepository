import React from 'react'


const Header = ({ title }) => {
  return <h2>{title}</h2>;
};
  
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
      {props.course.map((e) => {
        return <Part key={e.id} content={e.name} exercises={e.exercises} />
      })}
      </>
    )
  }
  
  const Total = (props) => {
    var total = 0;
    var lista = [];
    props.total.forEach((e) => {
      lista.push(e.exercises)
    })
    const sum = lista.reduce((acc, current) => acc + current, total);
    /*
    props.course.forEach((e) => {
      total += e.exercises
    })
    */
    return (
      <>
      <p><b>Total of {sum} exercises</b></p>
      </>
    )
  }
  
const Course = (props) =>{
    return (
      <>
      <h1>Web development curriculum</h1>
      {props.course.map((e) => {
         return (
        <div key={e.id}>
          <Header title={e.name}/>
          <Content course={e.parts}/>
          <Total total={e.parts} />
        </div>
         )
      })}
      </>
    )
  }

export default Course