// this page should be used only as a splash page to decide where a user should be navigated to
// when logged in --> to /heists
// when not logged in --> to /login

import { Clock8 } from "lucide-react"

export default function Home() {
  return (
    <div className="center-content">
      <div className="page-content">
        <h1>
          P<Clock8 className="logo" strokeWidth={2.75} />cket Heist
        </h1>
        <div>Tiny missions. Big office mischief.</div>
        <p className="intro-text">
          Welcome to Pocket Heist — the ultimate workplace game where you and your crew pull off
          covert micro-missions right under your boss&apos;s nose. Steal the last donut, swap someone&apos;s
          keyboard keys, or orchestrate the perfect chair heist. Plan your move, assemble your team,
          and execute flawlessly. Glory (and snacks) await the bold.
        </p>
      </div>
    </div>
  )
}
