import "./Roadmap.scss"

export default function RoadmapPage() {
  return (
    <div className="roadmap-page">
      <h2>Roadmap 11/2022 - 03/2023</h2>

      <div className="roadmap-line">
        <div className="roadmap-point">
          <div className="roadmap-date">November 2022</div>
          <div className="roadmap-text">Listing on CoinMarketCap</div>
        </div>
        <div className="roadmap-point">
          <div className="roadmap-date">November-December 2022</div>
          <div className="roadmap-text">
            Cooperation with influencers in the DEX sphere
          </div>
        </div>
        <div className="roadmap-point">
          <div className="roadmap-date">January 2022</div>
          <div className="roadmap-text">
            10 million dollars of market capitalization
          </div>
        </div>
        <div className="roadmap-point">
          <div className="roadmap-date">March 2022</div>
          <div className="roadmap-text">Launching the Insiders Protocol AI</div>
        </div>
      </div>
      <h2 className="opacity-60">To be continued...</h2>
    </div>
  )
}
