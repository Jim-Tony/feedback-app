import {v4 as uuidv4} from 'uuid';
import { BrowserRouter as Router,Link,Route,Routes } from 'react-router-dom';
import {useState} from 'react'
import Header from './components/Header'
import feedbackData from './data/feedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedBackForm from './components/FeedBackForm'
import About from './pages/About';
import AboutIcon from './components/AboutIcon';
function App() {
  const [feedback,setFeedback] = useState(feedbackData);
  const addFeedBack = (newFeedback)=>{
    newFeedback.id = uuidv4();
    console.log(newFeedback);

    setFeedback([newFeedback,...feedback]);
  }
  const handleDelete = (item)=>{  
    window.confirm('Are you sure you want to delete this feedback item?') &&
      setFeedback(feedback.filter(fItem=>fItem.id!==item.id));
  }
  return (
      <Router>
        <Header/>
        <div class="container">
          <Routes>
            <Route exact path='/' element={
              <>
              <FeedBackForm addFeedBack={addFeedBack}/>
              <FeedbackStats feedback={feedback}/>
              <FeedbackList onDelete={handleDelete} feedback = {feedback}/>
              <AboutIcon/>
              </>
            }/>
            <Route path='/about' element={<About/>}/>
          </Routes>
        </div>
      </Router>
  )
}

export default App;