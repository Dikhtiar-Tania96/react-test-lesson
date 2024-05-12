import Card from '../Card/Card';
import users from '../../data.json';
import Button from '../Button/Button';

const CardList = () => {
  return (
    <div>
      {users.map((user) => {
        return <Card key={user.id} name={user.name} phone={user.phone} />;
      })}
      <Card name='Alex' email='Alex@gmail.com' phone={'54793210'}>
        <div>
          <p>TEST</p>
        </div>
      </Card>
      <Card name='Max' email='max@gmail.com' phone={'54793210'}>
        <div>
          <Button>Test</Button>
        </div>
      </Card>
    </div>
  );
};

export default CardList;
