import Navbar from './components/navbar';
import Section1 from './components/section1';
import Footer from './components/footer';
import {Route, Routes} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar/>
      <Section1 />
      <Footer/>
    </div>
  );
}

export default App;
