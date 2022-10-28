import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom"
import "./App.scss"
import { RedditIcon, TelegramIcon, TwitterIcon } from "./Icons"
import Logo from "./logo/Logo"
import Page404 from "./pages/404/404"
import CommunityPage from "./pages/community/Community"
import FirstLookPage from "./pages/first-look/FirstLook"
import RoadmapPage from "./pages/roadmap/Roadmap"
import TokenomicsPage from "./pages/tokenomics/Tokenomics"

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="nav-top">
          <Link to="/" className="logo-link">
            <Logo />
            <div className="logo-text">
              <div className="logo-text-big">IN$I</div>
              <h1 className="logo-text-small">Insider's Community</h1>
            </div>
          </Link>
          <div className="nav-row">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <TwitterIcon />
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <RedditIcon />
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <TelegramIcon />
            </a>
            <div className="price">
              <span className="label">IN$I price</span>
              <span className="amount">$0.000145</span>
            </div>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <span>
                ฿u¥<span className="to-be-hidden"> tok€n</span>
              </span>
            </a>
          </div>
        </nav>
        <div className="content">
          <AppRoutes />
        </div>
        <nav className="nav-bottom">
          <NavLink to="/" end>
            First look
          </NavLink>
          <NavLink to="/tokenomics">Tokenomics</NavLink>
          <NavLink to="/roadmap">Roadmap</NavLink>
          <NavLink to="/community">Community</NavLink>
        </nav>
        <a
          href="/"
          target="_blank"
          className="white-paper"
          rel="noopener noreferrer"
        >
          <span>White Paper</span>
        </a>
      </div>
    </BrowserRouter>
  )
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<FirstLookPage />} />
      <Route path="/tokenomics" element={<TokenomicsPage />} />
      <Route path="/roadmap" element={<RoadmapPage />} />
      <Route path="/community" element={<CommunityPage />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  )
}
