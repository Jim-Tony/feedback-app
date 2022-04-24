import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
function FeedBackForm({addFeedBack}) {
    const [text,setText] = useState('');
    const [message,setMessage] = useState('');
    const [btnDisabled,setBtnDisabled] = useState(true);
    const [rating,setRating] = useState(10);
    const handleChange = ({ target: { value } })=>{
        if(value === ''){
            setMessage(null);
            setBtnDisabled(true)
        }
        else if(value!=='' && value.trim().length<=10){
            setBtnDisabled(true)
            setMessage('Text must be atleast 10 characters');
        }
        else{
            setMessage(null);
            setBtnDisabled(false);
        }
        setText(value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(text.trim().length>10){
            const newFeedBack = {
                text,
                rating,
            }
            // console.log(newFeedBack);
            addFeedBack(newFeedBack);
            setBtnDisabled(true);
            setText('');
            setRating(10);
        }

    }
  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={setRating} selected={rating}/>
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