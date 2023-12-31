import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Homepage from "./screens/homepage";
import Admin from "./screens/admin";
import Checkout from "./screens/checkout";

function App() {
  return (
    <>
     <Router>
     <Navbar/>
        <Routes>
          <Route
            path="/iirc-2023/"
            element={<Homepage/> }
          />
          <Route
          path="/somewhere/in/www/admin/"
            element={<Admin/>}
          />
          <Route
          path="/checkout/:id"
            element={<Checkout/>}
          />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
