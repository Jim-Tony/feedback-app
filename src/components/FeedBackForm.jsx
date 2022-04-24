import { useState } from "react"
import Card from "./shared/Card"
function FeedBackForm() {
    const [text,setText] = useState('');
    const handleChange = e=>{
        setText(e.target.value);
    }
  return (
    <Card>
        <form>
            <h2>How would you rate your service with us?</h2>
            <div className="input-group">
                <input type="text" onChange={handleChange} value={text} placeholder="Write a review"/>
            </div>
        </form>
    </Card>
  )
}
export default FeedBackForm