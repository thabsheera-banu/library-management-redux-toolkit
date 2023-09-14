import React from 'react';
import Navbar from './Navbar';
import BookList from './BookList'; 
function Home() {
  return (
    <div>
      <Navbar />
      <h1>Hi, welcome to library management</h1>
      <BookList />
    </div>
  );
}

export default Home;
