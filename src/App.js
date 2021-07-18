import React, { useState, useEffect } from "react"
import Editor from "./components/Editor"
import "./styles/App.css"
import useLocalStorage from "./hooks/useLocalStorage"
import Nav from "./components/Nav"

const App = () => {
  // without localStorage
  // const [html, setHtml] = useState("")
  // const [css, setCss] = useState("")
  // const [js, setJs] = useState("")

  //with localStorage
  const [html, setHtml] = useLocalStorage("html", "")
  const [css, setCss] = useLocalStorage("css", "")
  const [js, setJs] = useLocalStorage("js", "")

  const [srcDoc, setSrcDoc] = useState("")

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)
    return () => clearTimeout(timeout)
  }, [html, css, js])

  return (
    <>
      <Nav />
      <div className="pane top-pane">
        <Editor
          displayName="HTML"
          language="xml"
          value={html}
          onChange={setHtml}
        />
        <Editor
          displayName="CSS"
          language="css"
          value={css}
          onChange={setCss}
        />
        <Editor
          displayName="JavaScript"
          language="javascript"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="Output"
          frameBorder="0"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </>
  )
}

export default App
