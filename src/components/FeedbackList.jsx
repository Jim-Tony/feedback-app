import Feedbackitem from "./Feedbackitem"
import PropTypes from 'prop-types';
import {motion, AnimatePresence} from 'framer-motion';
function FeedbackList({feedback,onDelete}) {
  if(feedback.length===0) return <p>No Feedback lists to display</p>
  return (
    <div className="feedback-list">
    <AnimatePresence>
      {feedback.map(f=>
      <motion.div
        key={f.id}
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
      >
        <Feedbackitem onDelete={onDelete} key={f.id} item={f}/>
      </motion.div>)}
    </AnimatePresence>
    </div>
  )
}

FeedbackList.propTypes = {
  feedback:PropTypes.arrayOf(
    PropTypes.shape({
      rating:PropTypes.number.isRequired,
      text:PropTypes.string.isRequired,
    })
  )
}
export default FeedbackList