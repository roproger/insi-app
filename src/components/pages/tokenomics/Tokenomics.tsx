import "./Tokenomics.scss"

export default function TokenomicsPage() {
  return (
    <div className="tokenomics-page">
      <div className="distribution">
        <h2>Distribution</h2>
        <img src="/assets/distribution.svg" alt="Distribution" />
        <a href="/" target="_blank" rel="noopener noreferrer">
          White Paper
        </a>
      </div>
      <div className="fees">
        <h2>Fees</h2>
        <div className="fees-items">
          <div className="fees-item">
            <h3 className="text-teal-200">Buy (10%)</h3>
            <div className="fees-data">
              <div className="fees-data-number">2%</div>
              <div className="fees-data-text">Liquidity</div>
            </div>
            <div className="fees-data">
              <div className="fees-data-number">2%</div>
              <div className="fees-data-text">Burn</div>
            </div>
            <div className="fees-data">
              <div className="fees-data-number">3%</div>
              <div className="fees-data-text">Marketing</div>
            </div>
            <div className="fees-data">
              <div className="fees-data-number">3%</div>
              <div className="fees-data-text">Tax fee</div>
            </div>
          </div>
          <div className="fees-item">
            <h3 className="text-purple-200">Sell (20%)</h3>
            <div className="fees-data">
              <div className="fees-data-number">5%</div>
              <div className="fees-data-text">Liquidity</div>
            </div>
            <div className="fees-data">
              <div className="fees-data-number">5%</div>
              <div className="fees-data-text">Burn</div>
            </div>
            <div className="fees-data">
              <div className="fees-data-number">5%</div>
              <div className="fees-data-text">Marketing</div>
            </div>
            <div className="fees-data">
              <div className="fees-data-number">5%</div>
              <div className="fees-data-text">Tax fee</div>
            </div>
          </div>
        </div>
        <h2>Limits (Current)</h2>
        <div className="fees-items">
          <div className="fees-item">
            <div className="fees-data">
              <div className="fees-data-number">0.75%</div>
              <div className="fees-data-text">Max Buy Per Time</div>
            </div>
          </div>
          <div className="fees-item">
            <div className="fees-data">
              <div className="fees-data-number">1.5%</div>
              <div className="fees-data-text">Max Hold</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
