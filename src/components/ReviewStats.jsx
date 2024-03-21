import { useContext } from "react"
import ReviewContext from "../context/ReviewContext"


function ReviewStats() {
  const {review} = useContext(ReviewContext)

  //to sumt of the total reviews rating and divided by the total length of array
      let average = (review.reduce((acc, cur) => {
          return acc + cur.rating}, 0)/review.length).toFixed(1)
     //to convert the average output to 1 decimal point
     // average = average.toFixed(1)
      
    return (
      <>
        <div className="review-stats">
          <p>Reviews available: {review.length} reviews</p>
          <p>Average Rating: {isNaN(average) ? 0 : average} / 10</p>
        </div>
        
      </>
    )
  }
  
  export default ReviewStats