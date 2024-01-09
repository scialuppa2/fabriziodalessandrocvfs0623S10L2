import Container from 'react-bootstrap/Container';

const Welcome = () => {
    return (
        <Container fluid className="hero-section text-center">
            <h1 className="display-4">Benvenuto alla tua Library</h1>
            <p className="lead">Scopri una vasta selezione di libri!</p>
        </Container>
    );
};

export default Welcome;
