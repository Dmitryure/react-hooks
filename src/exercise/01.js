// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import React, { useState } from 'react'

function Greeting(props) {
const [name, setName] = useState(props.initialName)
  function handleChange(e) {
    setName(e.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initialName="vasya"/>
}

export default App
