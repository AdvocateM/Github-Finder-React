// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter as Router, Route } from 'react-router-dom'
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import About from './pages/About';
// <Route path='/' element={<Home />} />
//           <Route path='/notfound' element={<NotFound />} />
//           <Route path='/about' element={<About />} />
function App() {
  return (

    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar />

        <main className='container mx-auto px-3 pb-12'>
          content

          <Route path='/about' element={<About />} />
          <Route path='/' element={<Home />} />
          <Route path='/notfound' element={<NotFound />} />
          <Route path='*' element={<NotFound />} />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
