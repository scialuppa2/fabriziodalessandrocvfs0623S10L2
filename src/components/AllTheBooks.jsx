import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import books from '../data/books.json';

function AllTheBooks() {
    return (
        <Row>
            {books.horror.map(book => {
                return (
                    <Col xs={6} md={4} lg={3} key={book.asin}>
                        <Card style={{ width: '14rem' }}>
                            <Card.Img variant="top" src={book.img} style={{ height: '250px' }} />
                            <Card.Body style={{height: '150px'}}>
                                <Card.Title>{book.title}</Card.Title>
                                <Card.Text>{book.price} Euro</Card.Text>
                               
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })}
        </Row>
    );
}

export default AllTheBooks;