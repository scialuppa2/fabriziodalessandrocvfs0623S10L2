import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import SingleBook from './SingleBook';
import CommentArea from './CommentArea';

const BookList = ({ books }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);

  const changeSelectedBook = (asin) => {
    setSelectedBook(asin);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filtra i libri in base alla stringa di ricerca
  const filteredBooks = books.horror.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <Row>
        <Col md={8}>
          <Form.Group>
            <Form.Label>Cerca un libro</Form.Label>
            <Form.Control
              type="text"
              placeholder="Scrivi il titolo..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={8}>
          <Row>
            {filteredBooks.map((book) => (
              <Col xs={12} sm={6} md={4} key={book.asin}>
                <SingleBook
                  key={book.asin}
                  book={book}
                  selectedBook={selectedBook}
                  changeSelectedBook={changeSelectedBook}
                />
              </Col>
            ))}
          </Row>
        </Col>
        <Col
          md={4}
          className="position-sticky"
          style={{ top: 15, maxHeight: '100vh', overflowY: 'auto' }}
        >
          <CommentArea asin={selectedBook} />
        </Col>
      </Row>
    </Container>
  );
};

export default BookList;
