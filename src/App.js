
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Nav from './Nav';
import Tablereserve from './pages/Tablereserve';




function App() {
  return (
    <>
    <Router>

    <Header />
    <Nav />

    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/reservations" element={<Tablereserve />} />
      <Route path="/Home" element={<Main />} />
    </Routes>
    
    <Footer />

    </Router>

    </>


  );
}

export default App;
