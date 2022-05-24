import React, { useState } from 'react';
import { CopyCat } from '../components/CopyCat';

export const CopyCatContainer = () => {
  const [isCopying, setIsCopying] = useState(true);
  const [input, setInput] = useState('');

  const handleChange = (e) =>{
    const value = e.target.value;
    setInput(value);
  }

  const toggleTape = () => {
    setTimeout(()=> {
      setIsCopying(!isCopying)
    }, 500)
  }

  return (
    <CopyCat 
      value={input}
      isCopying={isCopying}
      handleChange={handleChange} 
      toggleTape={toggleTape}
    />
  );
}


