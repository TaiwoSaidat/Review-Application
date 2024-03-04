import { useState } from "react" 
import Button from "./layout/Button"

function ReviewForm() {
    const [text, setText] = useState('')

    const textHandler = (e) => {
        setText(e.target.value)
    }
  return (
    <>
      <div className="container">
      <div className="card">
            <form action="">
                <h3>Kindly drop a review of our services</h3>
                <div className="input-group">
                    <input type="text" value={text} placeholder='Drop your review' onChange={textHandler} />
                    {/* <button type="submit">Submit</button> */}
                    <Button type='submit' variant='secondary' >
                        Submit
                    </Button>

                </div>
            </form>
      </div>
      </div>
    </>
  )
}

export default ReviewForm
