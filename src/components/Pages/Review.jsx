import { Link } from 'react-router-dom'
import { ReviewProvider } from '../../context/ReviewContext'
import ReviewList from '../ReviewList'
import ReviewStats from '../ReviewStats'
import ReviewForm from '../ReviewForm'
import { FaHouseUser } from "react-icons/fa"


function Review() {

  return (
    <>
      <ReviewProvider>
        <ReviewForm />
        <div className="container">
          <ReviewStats />

          <ReviewList /> 
        </div>

          <div className="about-link" >
            <Link to='/'>
              <FaHouseUser size={40} />
            </Link>
          </div>
      </ReviewProvider>
    </> 
  )
}

export default Review