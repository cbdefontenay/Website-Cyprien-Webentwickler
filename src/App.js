import { Route, Routes } from "react-router-dom";
import "./App.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/Home/Home";
import Layout from "./components/layout/layout";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projekte" element={<Projects />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
