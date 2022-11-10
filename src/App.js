import Navbar from './components/navbar';
import Section1 from './components/section1';
import Section2 from './components/section2';
import Section5 from './components/section5';
import Footer from './components/footer';
import {Route, Routes} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar/>
      <Section1 />
      <Section2 />
      <Section5 />
      <Footer/>
    </div>
  );
}

export default App;
