import React, { useState } from 'react'
import Header from './Header'
import Note from './Note'
import Footer from './Footer'
import AddList from './AddList'
import Alert from './Alert'

function App() {
  const [output, setOutput] = useState([])

  function addClick(inputValue) {
    setOutput((prev) => [...prev, inputValue])
  }

  const [del, setDel] = useState(false)
  function delItem(id) {
    setOutput((prev) => prev.filter((data, index) => index !== id))
    setDel(true)
  }

  return (
    <div>
      <Header />
      {del && <Alert />}
      <AddList onAdd={addClick} />
      {output.map((data, index) => (
        <Note
          title={data.title}
          content={data.content}
          key={index}
          id={index}
          deleteItem={delItem}
        />
      ))}
      <Footer />
    </div>
  )
}

export default App
