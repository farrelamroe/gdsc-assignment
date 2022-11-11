import Navbar from './components/navbar';
import Section1 from './components/section1';
import Section2 from './components/section2';
import Section3 from './components/section3';
import Section4 from './components/section4';
import Section5 from './components/section5';
import SectionTambahan from './components/SectionTambahan';
import Footer from './components/footer';
import { HtmlHead } from "./components/HtmlHead";
import {Route, Routes} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="overflow-hidden">
    <HtmlHead title="Beranda"/>
      <Navbar/>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <SectionTambahan />
      <Section5 />
      <Footer/>
    </div>
  );
}

export default App;
