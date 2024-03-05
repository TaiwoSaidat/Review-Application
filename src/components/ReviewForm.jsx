import { useState } from "react" 
import Button from "./layout/Button"

const spanStyle = {
    display: 'block',
    fontStyle: 'italic',
    marginTop: '10px'
}

function ReviewForm() {
//state for input text
    const [text, setText] = useState('')
//state for button disabled
    const [btnDisabled, setBtnDisabled] = useState('true')
//state for validation (characters)
    const [msg, setMsg] = useState('')

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
  return (
    <>
      <div className="container">
      <div className="card">
            <form >
                <h3>Kindly drop a review of our services</h3>
                <div className="input-group">
                    <input type="text" value={text} placeholder='Drop your review' onChange={textHandler} />
                    {/* <button type="submit">Submit</button> */}
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
