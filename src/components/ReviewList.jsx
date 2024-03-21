import { useContext } from "react"
import ReviewContext from "../context/ReviewContext"
import ReviewItem from "./ReviewItem"

function ReviewList() {
  const {review} = useContext(ReviewContext)

  if(!review || review.length === 0){
      return <div className="card" > 
        <p>No Review Yet</p>
      </div>
  }
  return (
    <>

      <div>
        {review.map((item) => (
            <div key={item.id}>
                <ReviewItem review={item} />
            </div>
        ))}
      </div>
    </>
  )
}

export default ReviewList