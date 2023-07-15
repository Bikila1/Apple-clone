import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom'
// import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// Bootstrap CSS import 
import 'bootstrap/dist/css/bootstrap.min.css';



// ReactDOM.render(<App />, document.getElementById("root"));

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
// <React.StrictMode>
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// </React.StrictMode>
// )

const root = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
  </React.StrictMode>,
  root
);
