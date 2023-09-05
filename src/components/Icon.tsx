function Icon({iconLink = "/"}) {
  return (
    <div className="bg-secondary rounded-full inline-block">
        <img src={iconLink} alt="icon" className="p-3"/>
    </div>
  )
}

export default Icon