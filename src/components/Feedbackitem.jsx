import {useContext} from 'react';
import FeedBackContext from './context/FeedBackContext';
import Card from "./shared/Card"
import {FaTimes,FaEdit} from 'react-icons/fa';
function Feedbackitem({item}) {
  const {handleDelete,editFeedBack} = useContext(FeedBackContext);
  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button onClick={()=>handleDelete(item)} className="close">
          <FaTimes color="red"/>
        </button>
        <button className="edit" onClick={()=>editFeedBack(item)}>
          <FaEdit color='purple'></FaEdit>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default Feedbackitem