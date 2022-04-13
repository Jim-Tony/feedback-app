import Feedbackitem from "./Feedbackitem"
import PropTypes from 'prop-types';
function FeedbackList({feedback}) {
  return (
    <div className="feedback-list">
    {feedback.map(f=><Feedbackitem key={f.id} item={f}/>)}
    </div>
  )
}

FeedbackList.propTypes = {
  feedback:PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.number.isRequired,
      rating:PropTypes.number.isRequired,
      text:PropTypes.string.isRequired,
    })
  )
}
export default FeedbackList