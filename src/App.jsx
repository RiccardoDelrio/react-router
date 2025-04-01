import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import DefaultLayout from "./layout/DefoultLayout";
import Home from "./pages/Home"
import Posts from "./pages/Posts"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />


        </Route>
      </Routes>
    </BrowserRouter>



  )
}

export default App
