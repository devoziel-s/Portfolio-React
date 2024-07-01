import {BrowserRouter,Route, Routes} from "react-router-dom"
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import {Home} from "./pages/Home/Home"
import {Projects} from "./pages/Projects/Projects"
import {Contact} from "./pages/Contact/Contact"


export const App = () => (
  <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>

  </>
);
