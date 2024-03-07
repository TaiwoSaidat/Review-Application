import Button from "../layout/Button"
import { useNavigate, Link } from "react-router-dom"
import { FaQuestionCircle } from "react-icons/fa"

function Home() {

    const navigate = useNavigate()

    // const handleNavigate = () => {
    //     navigate('.review')
    // }

  return (
    <>
      <div className="container">
        <div className="card">
          <h1>Welcome to Group B Company</h1>
          <p>Thank you for using our product</p>
          <p>We would like you to leave a review</p>
          <br /><br />
          <Button type='button' variant='secondary' onClick={() => navigate('/review')} >
              Review
          </Button>
        </div>

        <div className="about-link" >
          <Link to='/about'>
            <FaQuestionCircle size={40} />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
