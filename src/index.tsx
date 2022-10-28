import ReactoDOM from "react-dom/client"
import App from "./components/App"

const el = document.getElementById("root") as HTMLDivElement
const root = ReactoDOM.createRoot(el)
root.render(<App />)
