import React from 'react';

const Index = ({ text, fn, color }) => {

  return (
      <button onClick={fn} style={{ background: color }}>
        {text}
      </button>
  );
};

export default Index;