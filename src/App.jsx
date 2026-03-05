
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ConnectComponent from './components/connect/Connect';
import ResumeSection from './components/ResumeSection/ResumeSection';
import Projects from './components/Project/Projects.jsx';
import Skills from './components/Skills/Skills.jsx';
import Courses from './components/courses/Courses';

function App() {

  return (
    <>
    <Navbar/>
    <section id="home">
    <ResumeSection/></section>
    <section id="projects">
<Projects/></section>
<section id="about">   
<Courses/></section>
<section id="skills">
<Skills/></section>
<section id="contact">
    <ConnectComponent/></section>
    <Footer/>
    </>
 
  )
}

export default App
