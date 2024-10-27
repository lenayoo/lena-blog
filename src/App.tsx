import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Write from './components/Write';
import Posts from './components/Posts';
import Contact from './components/Contact';
import Todo from './components/Todo';

function App() {
  return (
    <div className='container'>
      <Router>
        <Header />
        <div className='main-content'>
          <Routes>
            <Route path='/todo' element={<Todo />} />
            <Route path='/' element={<Posts />} />
            <Route path='/write' element={<Write />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
