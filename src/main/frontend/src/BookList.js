import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AddWindow from "./AddWindow.js";
import "./App.css";

const BookList = () => {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
      setLoading(true);
  
      fetch('/api/book/')
        .then(response => response.json())
        .then(data => {
          setBooks(data);
          setLoading(false);
        })
    }, []);

  const remove = async (id) => {
    await fetch(`/api/book/deleteid/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      updateBooks(id);
    });
  }

  const updateBooks = (id) => {
    let updatedBooks = [...books].filter(i => i.id !== id);
      setBooks(updatedBooks);
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  const bookList = books.map(book => {
     return <tr key={book.id}>
      <td style={{whiteSpace: 'nowrap'}}>{book.id}</td>
      <td>{book.name}</td>
      <td>{book.author}</td>
      <td>{book.overview}</td>
      <td>
        <ButtonGroup>
          <Button size="sm" color="danger" onClick={() => remove(book.id)}>削除</Button>
        </ButtonGroup>
      </td>
    </tr>
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <Container fluid>
        <h3>Book List</h3>
        <button onClick={openModal}>追加</button>
        <AddWindow isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        <Table className="mt-4">
          <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">書籍名</th>
            <th scope="col">著者</th>
            <th scope="col">概要</th>
          </tr>
          </thead>
          <tbody>
          {bookList}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default BookList;