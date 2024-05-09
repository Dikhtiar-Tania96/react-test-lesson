import './App.css'


// const Paragraph = (props) => {
//   return <p>{props.age}</p>
// }
// function App() {
//   return <div>
//     <Paragraph age={10}/>
//     <Paragraph age={100}/>
//   </div>
// }

const Card=(props)=>{
  return <div>
    <h2>Name: {props.name}</h2>
    <hr />
    <div>
      <p>Email: {props.email}</p>
      <p>Phone: {props.phone}</p>
      <p>Description: {props.description}</p>
    </div>
  </div>
}

function App(){
  return (
    <div>
      <Card name='Tania' email='lala@gmail.com' phone={123} />

      <Card name='Vlad' email='lala@gmail.com' phone={123} />
    </div>
  )
}

export default App

