import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';


const App = () => {

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch('/api/book/')
      .then(response => response.json())
      .then(data => {
        setBooks(data);
        setLoading(false);
      })
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-intro">
          <h2>Book List</h2>
          {books.map(book =>
            <div key={book.id}>
              {book.name}
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
