import { useState } from 'react'
// import wh from './assets/logo-wh.png'
// import bk from './assets/logo-blk.png'
import Header from './components/layout/Header'
// import ReviewItem from './components/layout/ReviewItem'
import data from './data/reviewData'
import ReviewList from './components/ReviewList'
import ReviewStats from './components/ReviewStats'
import ReviewForm from './components/ReviewForm'
import { v4 as uuid } from 'uuid'
// import { FaBeer } from "react-icons/fa";


function App() {
  const [review, setReview]= useState(data)
//function to delete review.id in DOM
  const deleteReview = (id) =>{
    if(window.confirm('Are you sure you want to delete review?')){
      setReview(review.filter((item) => item.id !== id))
    }
  }

  //function to add review
  const AddReview = (newReview) => {
    newReview.id=uuid()
    setReview([newReview, ...review])
  }

  return (
    <>
      <Header text="Review Application" />

      <ReviewForm handleAdd={AddReview} />

      <div className="container">
        <ReviewStats reviews={review} />
        <ReviewList reviews={review} deleteReview={deleteReview}/>
        
      </div>

      
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
  )
}

export default App
