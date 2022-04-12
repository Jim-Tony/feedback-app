import {useState} from 'react';
function Feedbackitem() {
    const [rating,setRating] = useState(0);
  return (
    <div className="card">
        <div className="num-display">{rating}</div>
        <div className="text-display">Hello</div>
        <button onClick={()=>setRating(rating+1)}>Click</button>
    </div>
  )
}

export default Feedbackitem