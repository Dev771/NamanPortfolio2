import { BrowserRouter, Route, Routes } from 'react-router-dom';
import style from './App.module.scss';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Home from './screen/Home/Home';
import SelectedWorks from './screen/SelectedWorks/SelectedWorks';
import Footer from './components/Home/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <main className={`${style.main} text-screenWhite`}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/works' element={<SelectedWorks />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  )
}

export default App;