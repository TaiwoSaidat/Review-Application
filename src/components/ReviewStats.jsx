import React from 'react'

function ReviewStats({reviews}) {
    let average = reviews.reduc((acc, cur) => {
        return acc + cur.rating}, 0)/reviews.length
   
    
  return (
    <>
      <div className="review-stats">
        <p>Reviews available: {reviews.length} reviews</p>
      </div>
      <p>{average} </p>
    </>
  )
}

export default ReviewStats
