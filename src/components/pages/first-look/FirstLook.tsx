import { useEffect, useRef, useState } from "react"
import { LinkIcon } from "../../Icons"

export default function FirstLookPage() {
  return (
    <>
      <AnimatingHeader />
      <p>
        IN$I is a phenomenal community platform, from now on, we are opening the
        opportunity for the general public to get insides from the world of
        cryptocurrencies with us. We{" "}
        <strong className="text-purple-200">do not</strong> make empty promises,
        we <strong className="text-purple-200">do not</strong> make decisions
        for you, we <strong className="text-purple-200">do not</strong>{" "}
        guarantee your success.{" "}
        <strong className="text-teal-200">
          We create a thinking community of like-minded people.
        </strong>
      </p>
      <p className="small">Contract Address:</p>
      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        className="content-spacebar"
      >
        <LinkIcon />
        <span>0x212b752BE75AFc68C0397175fdcBe12B4BA8Cf52</span>
      </a>
    </>
  )
}

const texts = [" gets insides", " knows insides", " shares insides"]
function AnimatingHeader() {
  const [text, setText] = useState("")
  const data = useRef({
    current: 0,
    position: 0,
  })
  useEffect(() => {
    const interval = setInterval(() => {
      const {
        current: { current, position },
      } = data
      const currentText = texts[current]
      if (position <= currentText.length)
        setText(currentText.slice(0, position))
      else if (position >= currentText.length + 60)
        setText(
          currentText.slice(
            0,
            currentText.length - (position - currentText.length - 60)
          )
        )
      if (position >= currentText.length - 1) {
        if (position < currentText.length + 60 + currentText.length) {
          ++data.current.position
        } else {
          data.current.current = current >= texts.length - 1 ? 0 : current + 1
          data.current.position = 0
        }
      } else ++data.current.position
    }, 80)
    return () => clearInterval(interval)
  }, [])
  return (
    <h1>
      <span className="main">IN$I</span>
      {text.split("").map((s, i) => (
        <span className="letter" key={s + i}>
          {s === " " ? <>&nbsp;</> : s}
        </span>
      ))}
      <div className="typing"></div>
    </h1>
  )
}
