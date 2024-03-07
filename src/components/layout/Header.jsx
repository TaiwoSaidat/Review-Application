
const header = {
  backgroundColor: '#ff6a95',
  color: '#fff'
}

function Header({text}) {
  return (
    <>
      <header style={header} className="head" >
        <h2>{text}</h2>
      </header>
    </>
  )
}

export default Header
