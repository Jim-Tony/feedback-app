import Card from "./shared/Card"
import PropTypes from 'prop-types';
import {FaTimes} from 'react-icons/fa';
function Feedbackitem({item,onDelete}) {
  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button onClick={()=>onDelete(item)} className="close">
          <FaTimes color="red"/>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

Feedbackitem.propTypes = {
  item:PropTypes.object,
}
export default Feedbackitem