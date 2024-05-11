// const Card=(props)=>{
//   return <div>
//     <h2>Name: {props.name}</h2>
//     <hr />
//     <div>
//       <p>Email: {props.email}</p>
//       <p>Phone: {props.phone}</p>
//       <p>Description: {props.description}</p>
//     </div>
//   </div>
// }


const Card = ({name, email, phone}) => {
  return (
    <>
    <div style={{backgroundColor:'red'}}>
      <h2>Name: {name}</h2>
      <hr />
        <div>
          {email && <p>Email:{email}</p>}
          <p>Phone: {phone}</p>
        </div>
    </div>
    </>
  );
};

export default Card;
