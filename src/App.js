import React from "react";
// Home page
import Navigation from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
// Pages
import Iphone from "./Pages/Iphone/Iphone";
import Mac from "./Pages/Mac/Mac";
import Four04 from "./Pages/Four04/Four04";
import SingleAppleProduct from "./Pages/Iphone/SingleAppleProduct";
import Ipad from "./Pages/Ipad/Ipad";
import Watch from "./Pages/Watch/Watch";
import Tv from "./Pages/Tv/Tv";
import Support from "./Pages/Support/Support";
import Music from "./Pages/Music/Music";
import Cart from "./Pages/Cart/Cart";

// import general css
import "./css/styles.css";
import "./css/bootstrap.css"
// importing Routes
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./Pages/SharedLayout.js";


function App() {
  return (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="/" element={<Main />} />
            <Route path="mac" element={<Mac />} />
            <Route path="iphone" element={<Iphone />} />
            <Route path="ipad" element={<Ipad />} />
            <Route path="watch" element={<Watch />} />
            <Route path="tv" element={<Tv />} />
            <Route path="music" element={<Music />} />
            <Route path="support" element={<Support />} />
            <Route path="cart" element={<Cart />} />
          <Route path="iphone/:productID" element={<SingleAppleProduct />} />
            <Route path="*" element={<Four04 />} />
          </Route>
        </Routes>
  );
}

export default App;
