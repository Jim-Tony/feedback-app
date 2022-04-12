import {useState} from 'react'
import Header from './components/Header'
import feedbackData from './data/feedbackData'
import FeedbackList from './components/FeedbackList'
function App() {
  const [feedback,setFeedback] = useState(feedbackData);
  return (
      <>
        <Header/>
        <FeedbackList feedback = {feedback}/>
      </>
  )
}

export default App