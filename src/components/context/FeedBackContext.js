import {v4 as uuidv4} from 'uuid';
import {createContext,useState,useEffect} from 'react';
const FeedBackContext = createContext();

export const FeedBackProvider = ({children})=>{
    const [feedBack,setFeedBack] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const fetchFeedBack = async ()=>{
        const response = await fetch(`http://localhost:5000/feedback`);
        const data = await response.json();
        setFeedBack(data);
        setIsLoading(true);
    }
    useEffect(()=>{
        fetchFeedBack();
    },[])
    //Fetching data
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
          setFeedBackEdit({
              item:{},
              edit:false,
          })
      }
    return <FeedBackContext.Provider
        value={{
            feedBack,
            feedBackEdit,
            isLoading,
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