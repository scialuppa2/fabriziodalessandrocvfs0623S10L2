import Container from 'react-bootstrap/Container';

const MyFooter = (props) => {
    return (
        <footer className="mt-5">
            <Container fluid className="text-center bg-secondary p-3">
                <p>&copy; 2023 Fabrizio D'Alessandro. Tutti i diritti riservati.</p>
            </Container>
        </footer>
    );
};

export default MyFooter;
