import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import data from '../../data/reviewData'
import ReviewList from '../ReviewList'
import ReviewStats from '../ReviewStats'
import ReviewForm from '../ReviewForm'


function Review() {
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
      <h1>Reviews</h1>
    </>
  )
}

export default Review
