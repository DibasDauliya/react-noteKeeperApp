import React, { useState } from 'react'

export default function AddList(props) {
  const [inputValue, setValue] = useState({ title: '', content: '' })

  function handlechange(e) {
    const { value, name } = e.target
    setValue((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <form className='form'>
      <input
        type='text'
        name='title'
        placeholder='Title name'
        autoComplete='off'
        onChange={handlechange}
        value={inputValue.title || ''}
      />
      <textarea
        onChange={handlechange}
        value={inputValue.content || ''}
        name='content'
        cols='30'
        rows='5'
        placeholder='Enter your note'
      ></textarea>
      <button
        onClick={(e) => {
          e.preventDefault()
          props.onAdd(inputValue)
          setValue({ title: '', content: '' })
        }}
      >
        Add
      </button>
    </form>
  )
}
