import React from 'react';
import Header from '../Header';

const Home = () => {
  return (
    <div>
      <Header />
      <div>This is a react component！</div>
      <p>test change</p>
      <button
        type="button"
        onClick={(e) => {
          console.log(1111, 'click')
        }}
      >
        click me
      </button>
    </div>
  )
}

export default Home;