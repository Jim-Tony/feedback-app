import loading from '../../assests/loading.gif'
function Spinner() {
  return (
    <img src={loading} alt="Loading" style={{margin:'auto',display:'block',width:'300px'}}/>
  )
}

export default Spinner;