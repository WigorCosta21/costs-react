import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./components/pages/Home"
import Company from "./components/pages/Company"
import Contact from "./components/pages/Contact"
import NewProject from "./components/pages/NewProject"

import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Projects from "./components/pages/Projects";


const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Container custonClass='min-height'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>
      <p>Footer</p>
    </BrowserRouter>
  )
}

export default RoutesApp