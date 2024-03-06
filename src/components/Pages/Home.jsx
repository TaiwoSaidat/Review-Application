import Button from "../layout/Button"
import { useRoutes } from "react-router-dom"

function Home() {

    const route = useRoutes()

    const handleNavigate = () => {
        route.push('.review')
    }

  return (
    <>
      <div className="container">
        <h1>Welcome to Group B Company</h1>
        <p>Thank you fror using out product</p>
        <p>We would like for you to give a review</p>
        <Button type='button' variant='secondary' onClick={handleNavigate} >
            Review
        </Button>

      </div>
    </>
  )
}

export default Home
