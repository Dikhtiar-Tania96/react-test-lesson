import Card from './components/Card'
import users from './data.json'


// const Paragraph = (props) => {
//   return <p>{props.age}</p>
// }
// function App() {
//   return <div>
//     <Paragraph age={10}/>
//     <Paragraph age={100}/>
//   </div>
// }



function App(){
  return (
    <div>
      {users.map((user)=>{
        return <Card key={user.id} name={user.name} phone={user.phone}/>
      })}
      <Card name='Alex' email='alex@gmail.com' phone={98745632}/>
    
    </div>
  )
}

export default App

