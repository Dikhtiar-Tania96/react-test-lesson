import users from '../../data.json'
import Card from './components/Card/Card'

const CardList = () => {
  return (
    <div>
    {users.map((user)=>{
      return <Card key={user.id} name={user.name} phone={user.phone}/>
    })}
    <Card name='Alex' email='alex@gmail.com' phone={98745632}/>
  
  </div>
  )
}

export default CardList