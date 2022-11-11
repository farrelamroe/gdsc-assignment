import Navbar from './components/navbar';
import Section1 from './components/section1';
import Section2 from './components/section2';
import Section3 from './components/section3';
import Section4 from './components/section4';
import Section5 from './components/section5';
import SectionTambahan from './components/SectionTambahan';
import SectionTambahan1 from './components/SectionTambahan1';
import SectionTambahan2 from './components/SectionTambahan2';
import SectionTambahan3 from './components/SectionTambahan3';
import SectionTambahan4 from './components/SectionTambahan4';
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
      <SectionTambahan1 />
      <SectionTambahan2 />
      <SectionTambahan3 />
      <SectionTambahan4 />
      <Section5 />
      <Footer/>
    </div>
  );
}

export default App;
