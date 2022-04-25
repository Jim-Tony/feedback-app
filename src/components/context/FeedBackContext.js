import {v4 as uuidv4} from 'uuid';
import {createContext,useState} from 'react';
import feedbackData from '../../data/feedbackData';
const FeedBackContext = createContext();

export const FeedBackProvider = ({children})=>{
    const [feedBack,setFeedBack] = useState(feedbackData);
    const [feedBackEdit,setFeedBackEdit] = useState({
        item:{},
        edit:false
    })
    const editFeedBack = (item)=>{
        setFeedBackEdit({
            item,
            edit:true
        })
    }
    const addFeedBack = (newFeedback)=>{
        newFeedback.id = uuidv4();
        // console.log(newFeedback);
        setFeedBack([newFeedback,...feedBack]);
      }
      const handleDelete = (item)=>{  
        window.confirm('Are you sure you want to delete this feedback item?') &&
          setFeedBack(feedBack.filter(fItem=>fItem.id!==item.id));
      }
      const updateFeedBack = (id,updItem)=>{
          setFeedBack(feedBack.map(item=>(item.id===id?{...item,...updItem}:item)));
      }
    return <FeedBackContext.Provider
        value={{
            feedBack,
            feedBackEdit,
            handleDelete,
            addFeedBack,
            editFeedBack,
            updateFeedBack,
        }}
    >
        {children}
    </FeedBackContext.Provider>
}
export default FeedBackContext;