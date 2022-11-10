import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'
// import {each} from 'immer/dist/internal'

// Quick Tip

// - Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

// const shuffledEmojisList = () => {
//   const {emojisList} = this.props
//   return emojisList.sort(() => Math.random() - 0.5)
// }

class EmojiGame extends Component {
  state = {clickedList: [], isGameOn: true, topScore: 0}

  resetGame = () => {
    this.setState({clickedList: [], isGameOn: true})
  }

  renderScore = () => {
    const {emojisList} = this.props
    const {clickedList} = this.state
    const isWon = clickedList.length === emojisList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        onclickPlayAgain={this.resetGame}
        score={clickedList.length}
      />
    )
  }

  finishGameAndSetTopScore = score => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (score > newTopScore) {
      newTopScore = score
    }
    this.setState({topScore: newTopScore, isGameOn: false})
  }

  onClickEmoji = id => {
    const {clickedList} = this.state
    // const {emojisList} = this.props
    const isEmojiPresent = clickedList.includes(id)
    const clickedEmojisListLength = clickedList.length

    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojisListLength)
    }

    this.setState(prevState => ({
      clickedList: [...prevState.clickedList, id],
    }))
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderGame = () => {
    const shuffledNewList = this.shuffledEmojisList()

    return (
      <ul className="emoji-list-container">
        {shuffledNewList.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            emojiDetails={eachEmoji}
            shuffledEmojisList={this.onClickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {clickedList, topScore, isGameOn} = this.state
    return (
      <div className="bg">
        <NavBar
          score={clickedList.length}
          isGameOn={isGameOn}
          topScore={topScore}
        />
        <div>{isGameOn ? this.renderGame() : this.renderScore()}</div>
      </div>
    )
  }
}

export default EmojiGame
