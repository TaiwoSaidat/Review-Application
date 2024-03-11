import { Link } from 'react-router-dom'
// import { v4 as uuid } from 'uuid'
import ReviewList from '../ReviewList'
import ReviewStats from '../ReviewStats'
import { FaHouseUser } from "react-icons/fa"


function Review({ review, setReview }) {
  //function to delete review.id in DOM
  const deleteReview = (id) => {
    if (window.confirm("Are you sure you want to delete review?")) {
      setReview(review.filter((item) => item.id !== id));
    }
  };



  return (
    <>
      <div className="container">
        <ReviewStats reviews={review} />
        <ReviewList reviews={review} deleteReview={deleteReview} />

        <div className="about-link">
            <Link to="/">
                <FaHouseUser size={40} />
            </Link>
        </div>
      </div>  
    </>
  );
}

export default Review
