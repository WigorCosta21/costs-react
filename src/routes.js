import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home"
import Company from "./components/pages/Company"
import Contact from "./components/pages/Contact"
import NewProject from "./components/pages/NewProject"

import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Projects from "./components/pages/Projects";
import Footer from "./components/layout/Footer";


const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Container customClass='min-height'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  )
}

export default RoutesApp