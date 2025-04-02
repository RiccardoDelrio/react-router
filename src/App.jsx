import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import DefaultLayout from "./layout/DefoultLayout";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import AboutUs from "./pages/AboutUs";
import Product from "./pages/product";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/post/:id" element={<Product />} />
          {/* se non è una di queste rotte di su, prende questa di giu */}
          <Route path="/*" element={<h1>404 not found</h1>}></Route>


        </Route>
      </Routes>
    </BrowserRouter>



  )
}

export default App
