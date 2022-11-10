import './index.css'

const EmojiCard = props => {
  const {emojiDetails, shuffledEmojisList} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmoji = () => {
    shuffledEmojisList(id)
  }

  return (
    <li className="emoji-list-items">
      <button type="button" className="emoji-btn" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}

export default EmojiCard
