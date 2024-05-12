import clsx from 'clsx';
import css from './Card.module.css'
import Button from '../Button/Button';

const isOnline = false;


const Card = ({ name, email, phone, children }) => {
  const classNames = clsx(css.container , isOnline? css.online : css.offLine)
return (
    <>
      <div className={classNames}>
        <h2>Name: {name}</h2>
        <hr />
        <div>
          {email && <p>Email:{email}</p>}
          <p>Phone: {phone}</p>
        </div>
        {children}
      </div>
      <Button variant='primary'>children in button</Button>
      <hr />
    </>
  );
};

export default Card;
