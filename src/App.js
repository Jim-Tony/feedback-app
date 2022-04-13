import {useState} from 'react'
import Header from './components/Header'
import feedbackData from './data/feedbackData'
import FeedbackList from './components/FeedbackList'
function App() {
  const [feedback,setFeedback] = useState(feedbackData);
  const handleDelete = (item)=>{  
    window.confirm('Are you sure you want to delete this feedback item?') &&
      setFeedback(feedback.filter(fItem=>fItem.id!==item.id));
  }
  return (
      <>
        <Header/>
        <FeedbackList onDelete={handleDelete} feedback = {feedback}/>
      </>
  )
}

export default App