
import { useState, useContext } from "react" 
import ReviewContext from "../context/ReviewContext"
import Button from "./layout/Button"
import Rating from "./Rating"

const spanStyle = {
    display: 'block',
    fontStyle: 'italic',
    marginTop: '10px'
}

function ReviewForm() {
  const {AddReview} = useContext(ReviewContext)
//state for input text
    const [text, setText] = useState('')
//state for button disabled
// this should be the real value from class but it kept throwing an error
//    const [btnDisabled, setBtnDisabled] = useState('true')
    const [btnDisabled, setBtnDisabled] = useState('disabled={true}')
//state for validation (characters)
    const [msg, setMsg] = useState('')
//state to handle ratings from users
    const [rating, setRating] = useState(7)

//function to update the text state in the input field
    const textHandler = (e) => {
      if(text === ''){
        setBtnDisabled(true)
        setMsg(null)
      } else if (text !== '' && text.trim().length <=20){
        setMsg('your characters should be more than 20')
        setBtnDisabled(true)
      } else {
        setMsg(null)
        setBtnDisabled(false)
      }
      
        setText(e.target.value)
    }

    // function to submit a review
    const formSubmit = (e) => {
      e.preventDefault()
      if(text.trim().length >20){
        const newReview = {
          text,
          rating
        }
        AddReview(newReview)
        setText('')
      }
    }

  return (
    <>
      <div className="container">
      <div className="card">
            <form onSubmit={formSubmit} >
                <h3>Kindly drop a review of our services</h3>
                <Rating ratingState={(rating) => setRating(rating)} />
<br /> <br />
                <div className="input-group">
                    <input type="text" value={text} placeholder='Drop your review' onChange={textHandler} />
                    <Button type='submit' variant='secondary' isDisabled={btnDisabled} >
                        Submit
                    </Button>
                </div>

                {msg && (<span className="message" style={spanStyle}>{msg}</span>)}
            </form>
      </div>
      </div>
    </>
  )
  }

export default ReviewForm
