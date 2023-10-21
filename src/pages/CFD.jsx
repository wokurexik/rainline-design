import React from 'react'
import '../styles/CFD.css'
import '../mobile-styles/mobile-cfd.css'
import '../tablet-styles/tablet-cfd.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function CFD() {
  return (
    <div className="App">
      <Navbar />
      <div className="title-div">
        <h2 className="title">
          What is <span> CFD </span>trading and how does it work?
        </h2>
      </div>
      <div className="article">
        <div className="article-one">
          <h3> What is CFD trading?</h3>
          <p>
            CFD trading is the method of speculating on the underlying price of
            an asset – like shares, indices, commodities, cryptos, forex and
            more – on a trading platform like ours. A CFD – short for ‘contract
            for difference’ – is the type of derivative that enables you to
            trade the price movements of these financial markets with us.
          </p>
        </div>

        <div className="article-two">
          <h3> 3 CFD trading essentials</h3>
          <p>
            When trading CFDs, you’re predicting whether an asset’s price will
            rise or fall. If you think the asset’s price will go up, you’ll
            ‘buy’ (go long) and if you think the price will fall, you’ll ‘sell’
            (go short). The outcome of your prediction will determine whether
            you make a profit or incur a loss.It’s important to note that both
            ‘buying’ and ‘selling’ can result in a loss, and you should make
            sure that you understand how CFDs work before opening a position.
            You should also take steps to manage your risk. To open a long CFD
            position in our platform, you’d choose ‘buy’ on the deal ticket and
            to open a short position, you’d choose ‘sell’.
          </p>
        </div>

        <div className="article-three-one">
          <h3>
            <span>1</span> CFD trading is leveraged
          </h3>
          <p>
            Leverage in CFD trading enables you to get full market exposure for
            a small initial deposit, known as margin. In other words, you only
            have to put up a percentage of the cost of the position as a margin,
            to gain exposure to the full value of the trade.
          </p>

          <p>
            For example, if you want to open a CFD trade on 50 Tesla shares,
            with the share price at $800 per share, you’ll only require $8000 to
            get exposure to a $40,000 position. That’s because your initial
            margin would only be 20% of the total $40,000 trade value ($8000).
            But remember, your profits or losses will be calculated on the full
            $40,000 value of the position, not the $8000 margin.
          </p>
        </div>

        <div className="article-three-two">
          <h3>
            <span>2</span>You can go long or short with CFDs
          </h3>
          <p>
            When trading CFDs, you’re predicting whether an asset’s price will
            rise or fall. If you think the asset’s price will go up, you’ll
            ‘buy’ (go long) and if you think the price will fall, you’ll ‘sell’
            (go short). The outcome of your prediction will determine whether
            you make a profit or incur a loss.
          </p>

          <p>
            It’s important to note that both ‘buying’ and ‘selling’ can result
            in a loss, and you should make sure that you understand how CFDs
            work before opening a position.{" "}
          </p>
        </div>

        <div className="article-three-three">
          <h3>
            <span>3</span> CFDs behave similarly to their underlying market
          </h3>
          <p>
            CFD trading is designed to mimic trading each underlying market
            relatively closely. Our CFD prices are only driven by the movements
            of the underlying market. Some asset prices have a spread wrapped
            around it, while other CFD trades will incur a commission – it all
            depends on which market you're trading.
          </p>

         
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CFD