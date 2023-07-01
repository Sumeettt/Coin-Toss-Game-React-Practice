// Write your code here
import {Component} from 'react'
import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    heads: 0,
    tails: 0,
    tossValue: 0,
  }

  onClickingTossCoin = () => {
    const {heads, tails, tossValue} = this.state
    const tossResult = Math.floor(Math.random() * 2)

    this.setState({
      tossValue: tossResult,
    })

    if (tossResult === 0) {
      this.setState(prevState => ({heads: prevState.heads + 1}))
    } else {
      this.setState(prevState => ({tails: prevState.tails + 1}))
    }
  }

  render() {
    const {heads, tails, tossValue} = this.state
    const total = heads + tails
    const imgUrl = tossValue === 0 ? HEADS_IMG_URL : TAILS_IMG_URL

    return (
      <div className="bg-container">
        <div className="coin-toss-game-card">
          <h1 className="coin-toss-heading">Coin Toss Game</h1>
          <p className="heads-tails-text">Heads (or) Tails</p>
          <img className="toss-result-img" src={imgUrl} alt="toss result" />
          <button
            className="toss-coin-button"
            type="button"
            onClick={this.onClickingTossCoin}
          >
            Toss Coin
          </button>
          <div className="game-results-container">
            <p className="count">Total: {total}</p>
            <p className="count">Heads: {heads}</p>
            <p className="count">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
