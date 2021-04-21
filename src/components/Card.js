const Card = ({ digit, unit }) => {
  return (
    <div className="card">
      <h2>{digit}</h2>
      <p>{unit}</p>
    </div>
  )
}

export default Card
