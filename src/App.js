import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from './components/MyNav';
import Welcome from './components/Welcome';
//import AllTheBooks from './components/AllTheBooks';
import MyFooter from './components/MyFooter';
import Container from 'react-bootstrap/Container';
import BookList from './components/BookList';
import books from './data/books.json';


function App() {
  return (
    <div>
      <MyNavbar />
      <Welcome />
      
        {/*<AllTheBooks /> */}
        <BookList books={books}/>
      
        <MyFooter />

    </div>
  );
}

export default App;
