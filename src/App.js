import React from 'react';
import Navbar from './components/Navbar'
import BookList from './components/BookList'
import ThemeContextProvider from './contexts/ThemeContetx'
import ThemeToggle from './components/ThemeToggle';
import ReactjsOrg from './components/ReactjsOrg'

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookList />
        <ThemeToggle />
      </ThemeContextProvider>

      < ReactjsOrg />
    </div>
  );
}

export default App;
