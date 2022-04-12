import Feedbackitem from "./Feedbackitem"
function FeedbackList({feedback}) {
  return (
    <div className="feedback-list">
    {feedback.map(f=><Feedbackitem key={f.id} item={f}/>)}
    </div>
  )
}

export default FeedbackList