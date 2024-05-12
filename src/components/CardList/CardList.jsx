import Card from '../Card/Card';
import users from '../../data.json';

const CardList = () => {
  return (
    <div>
      {users.map((user) => {
        return <Card key={user.id} name={user.name} phone={user.phone} />;
      })}
      
    </div>
  );
};

export default CardList;
