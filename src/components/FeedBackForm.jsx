import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button";
function FeedBackForm() {
    const [text,setText] = useState('');
    const [message,setMessage] = useState('');
    const [btnDisabled,setBtnDisabled] = useState('');
    const handleChange = e=>{
        if(text === ''){
            setMessage(null);
            setBtnDisabled(true)
        }
        else if(text!=='' && text.trim().length<=10){
            setBtnDisabled(true)
            setMessage('Text must be atleast 10 characters');
        }
        else{
            setMessage(null);
            setBtnDisabled(false);
        }
        setText(e.target.value);
    }
  return (
    <Card>
        <form>
            <h2>How would you rate your service with us?</h2>
            <div className="input-group">
                <input type="text" onChange={handleChange} value={text} placeholder="Write a review"/>
                <Button type="submit" isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && <div className="message">{message}</div>}
        </form>
    </Card>
  )
}
export default FeedBackForm