import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import wh from './assets/logo-wh.png'
// import bk from './assets/logo-blk.png'
import Header from './components/layout/Header'
import Home from './components/Pages/Home'
import Review from './components/Pages/Review'
import About from './components/Pages/About'
import AllReviews from './components/Pages/AllReviews'
import { useState, useEffect } from 'react'
import data from "./data/reviewData.js";
// import { FaBeer } from "react-icons/fa";

function App() {
  const localStorageItems = JSON.parse(localStorage.getItem("review"));

  const [review, setReview] = useState(localStorageItems || data);
  
   useEffect(() => {
     localStorage.setItem("review", JSON.stringify(review));
   }, [review]);

  return (
    <>
      <Header text="Review Application" />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/review"
            element={<Review review={review} setReview={setReview} />}
          />
          <Route
            path="/allreviews"
            element={<AllReviews review={review} setReview={setReview} />}
          />
        </Routes>
      </Router>






























      {/*  <h3>
      Lets go for a <FaBeer />?
    </h3> */}

      {/* <h2>hello fellows</h2> */}
      {/* <div>

      <header>
       <img src={wh} className="logo" alt="Vite logo" />
      </header> 
        const [count, setCount] = useState(0)L

        <a href="https://vitejs.dev" target="_blank">
          
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={bk} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App
