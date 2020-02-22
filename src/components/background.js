import React from 'react';

function Background( { color, children } ) {
  const styles = {
    backgroundColor: color,
  };
  return (
    <div className='background' style={ styles }>
      { children }
    </div>
  );
}

export default Background;
