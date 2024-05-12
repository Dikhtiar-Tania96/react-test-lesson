import clsx from 'clsx';
import css from './Card.module.css'

const isOnline = false;


const Card = ({ name, email, phone }) => {
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
      </div>
      <hr />
    </>
  );
};

export default Card;
