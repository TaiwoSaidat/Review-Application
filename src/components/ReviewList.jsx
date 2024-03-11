import ReviewItem from "./ReviewItem"

function ReviewList({reviews, deleteReview}) {

  if(!reviews || reviews.length === 0){
      return <div className="card" > 
        <p>No Review Yet</p>
      </div>
  }
  return (
    <>

      <div className="card-container">
        {reviews.map((item) => (
            <div key={item.id}>
              <ReviewItem review={item} deleteReview={deleteReview} />
            </div>
        ))}
      </div>
    </>
  )
}

export default ReviewList
