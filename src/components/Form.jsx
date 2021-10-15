import React, { useState } from 'react';

const Form = ({ search }) => {
  const [formText, setformText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setformText("")
    search(formText);
  }

  return (
    <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
        <input onChange={e => setformText(e.target.value)} value={formText} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search..." />
        <button className="flex-shrink-0 bg-blue-400 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
      Search
      </button>
      </div>
      </form>
		</div>
  )
}

export default Form;