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

export default Card;