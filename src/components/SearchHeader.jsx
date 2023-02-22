import { useState } from 'react';
import { useNavigate, Form, Link } from 'react-router-dom';

import { SiYoutube } from 'react-icons/si'
import { TbVirusSearch } from 'react-icons/tb';

const SearchHeader = () => {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const putText = (event) => {
    setText(event.target.value);
  }

  const toQuery = (event) => {
    event.preventDefault();
    navigate(`/videos/${text}`);
    setText('');
  }

  return (
    <header className='flex items-center border-b-2 border-zinc-700'>
      <Link to='/' className='flex items-center text-3xl basis-2/6 py-3 text-red-900'>
        <SiYoutube className='ml-2'/>
        <h1 className='ml-1'>Youtube</h1>
      </Link>
      <Form onSubmit={toQuery} className='flex basis-4/6'>
        <input type="text" value={text} onChange={putText} 
        className='basis-3/6 h-8 focus:outline-none'/>
        <button className='text-2xl text-zinc'>
          <TbVirusSearch />
        </button>
      </Form>
    </header>
  )
}

export default SearchHeader;