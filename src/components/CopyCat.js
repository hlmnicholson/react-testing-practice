import React from 'react';
import { styles } from '../styles';

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};

export const CopyCat = ({name, value, handleChange, isCopying, toggleTape}) => {
  return (
    <div style={styles.divStyles}>
      <h1 style={{ marginBottom: 80 }}>Copy Cat {name || 'Tom'}</h1>
      <input
        type="text"
        value={value}
        data-testid="custom-element"
        onChange={handleChange} 
      />
      <img 
        alt= {isCopying ? 'copycat': 'quietcat'}
        src={isCopying ? images.copycat : images.quietcat}
        style={styles.imgStyles}
        onClick={toggleTape}
        data-testid="cat-image"
      />
      <p data-testid="copied-text">{isCopying && value}</p>
    </div>
  );
}