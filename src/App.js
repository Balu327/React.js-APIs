import React, { useState, useEffect } from "react"
import HttpClient from "./HttpClient"

const App = () => {
  const [rover, setRover] = useState({})

  useEffect(() => {
    HttpClient.getRover().then(roverData => {
      setRover(roverData.data)
    })
  }, [])

  return (
    <div style={{ maxWidth: 900, padding: 30 }}>
      <h1>NASA API</h1>
      <h2>Astronomy Picture of the Day</h2>
      {rover && (
        <article>
          <header>
            {rover.title} - <i>{rover.date}</i>
          </header>
          <img src={rover.url} alt="Mars Rover Photos" width="800" height="auto" />
          <p>{rover.explanation}</p>
          <pre
            style={{
              overflowX: "auto",
              whiteSpace: "pre-wrap",
              wordWrap: "break-word",
            }}
          >
            <hr />
            {JSON.stringify(rover, null, 2)}
          </pre>
        </article>
      )}
    </div>
  )
}

export default App
