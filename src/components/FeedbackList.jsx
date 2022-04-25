import Feedbackitem from "./Feedbackitem"
import {useContext} from 'react';
import FeedBackContext from './context/FeedBackContext';
import {motion, AnimatePresence} from 'framer-motion';
function FeedbackList() {
  const {feedBack} = useContext(FeedBackContext);
  if(feedBack.length===0) return <p>No Feedback lists to display</p>
  return (
    <div className="feedback-list">
    <AnimatePresence>
      {feedBack.map(f=>
      <motion.div
        key={f.id}
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
      >
        <Feedbackitem key={f.id} item={f}/>
      </motion.div>)}
    </AnimatePresence>
    </div>
  )
}

export default FeedbackList