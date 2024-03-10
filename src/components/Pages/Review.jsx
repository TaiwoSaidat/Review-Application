import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import ReviewList from '../ReviewList'
import ReviewStats from '../ReviewStats'
import ReviewForm from '../ReviewForm'
import { FaHouseUser } from "react-icons/fa"
import Button from '../layout/Button'


function Review({review, setReview}) {

 
  //function to delete review.id in DOM
  const deleteReview = (id) => {
    if (window.confirm("Are you sure you want to delete review?")) {
      setReview(review.filter((item) => item.id !== id));
    }
  };

  const handleClick = () => {
    return (
      <div>
        {/* Button with onClick event handler */}
        <button onClick={handleClick}>Click me</button>
      </div>
    );
  };
  console.log("From review page", review);
 

  //function to add review
  const AddReview = (newReview) => {
    newReview.id = uuid();
    setReview([newReview, ...review]);
  };

  const navigate = useNavigate();

  return (
    <>
      <ReviewForm handleAdd={AddReview} />

      <div className="container">
        <Button
          type="button"
          variant="secondary"
          onClick={() => navigate("/allreviews")}
        >
          See All Reviews
        </Button>
      </div>

      {/* <div className="container">
        <ReviewStats reviews={review} />
        <ReviewList reviews={review} deleteReview={deleteReview}/> 
      </div> */}

      <div className="about-link">
        <Link to="/">
          <FaHouseUser size={40} />
        </Link>
      </div>
    </>
  );
}

export default Review
