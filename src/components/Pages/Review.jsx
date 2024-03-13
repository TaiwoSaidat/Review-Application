import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import { ReviewProvider } from '../../context/ReviewContext'
import ReviewForm from '../ReviewForm'
import { FaHouseUser } from "react-icons/fa"
import Button from '../layout/Button'

const btnStyle = {
    paddingLeft:"50px",
    backgroundColor: 'white',
  };

function Review({review, setReview}) {
 
  //function to add review
  const AddReview = (newReview) => {
    newReview.id = uuid();
    setReview([newReview, ...review]);
  };

  const navigate = useNavigate();

  return (
    <>
      
      <ReviewProvider>
        <div className="container">
          <div className="card">
              <ReviewForm handleAdd={AddReview} />
          </div>

          <Button type="button" variant="secondary" style={btnStyle} onClick={() => navigate("/allreviews")}>
              See All Reviews
          </Button>
          <div className="about-link">
              <Link to="/">
                  <FaHouseUser size={40} />
              </Link>
          </div>
        </div>
      </ReviewProvider>
      
    </>
  );
}

export default Review
