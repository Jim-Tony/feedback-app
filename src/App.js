import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { FeedBackProvider } from './components/context/FeedBackContext';
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedBackForm from './components/FeedBackForm'
import About from './pages/About';
import AboutIcon from './components/AboutIcon';
function App() {
  return (
      <FeedBackProvider>
        <Router>
          <Header/>
          <div className="container">
            <Routes>
              <Route exact path='/' element={
                <>
                <FeedBackForm/>
                <FeedbackStats/>
                <FeedbackList/>
                <AboutIcon/>
                </>
              }/>
              <Route path='/about' element={<About/>}/>
            </Routes>
          </div>
        </Router>
      </FeedBackProvider>
  )
}

export default App;