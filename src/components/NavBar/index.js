// Write your code here.
import './index.css'

const NavBar = props => {
  const {isGameOn, topScore, score} = props

  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-logo"
        />
        <h1 className="title">Emoji Game</h1>
      </div>
      {isGameOn ? (
        <div className="nav-container">
          <p className="score">Score: {score}</p>
          <p className="score">Top Score: {topScore}</p>
        </div>
      ) : null}
    </nav>
  )
}

export default NavBar
