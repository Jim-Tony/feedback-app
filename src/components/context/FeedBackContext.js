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
    const addFeedBack = async (newFeedback)=>{
        const response = await fetch('/feedback',{
            method:'POST',
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify(newFeedback),
        })
        const data = await response.json();
        setFeedBack([data,...feedBack]);
      }
      const handleDelete = async (item)=>{  
        if(window.confirm('Are you sure you want to delete this feedback item?')){
            setFeedBack(feedBack.filter(fItem=>fItem.id!==item.id));
            await fetch(`/feedback/${item.id}`,{method:'DELETE'});
        }
      }
      const updateFeedBack = async (id,updItem)=>{
          const response = await fetch(`/feedback/${id}`,{
              method:'PUT',
              headers:{'Content-Type':'application/json'},
              body:JSON.stringify(updItem),
          })
          const data = await response.json();
          setFeedBack(feedBack.map(item=>(item.id===id?{...item,...data}:item)));
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