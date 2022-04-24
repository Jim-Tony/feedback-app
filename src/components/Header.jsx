import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
function Header({text,bgColor,textColor}) {
  const headerStyles ={
      backgroundColor: bgColor,
      color: textColor,
  } 
  return (
    <Link to='/' style={{textDecoration:'none'}}>
        <header style={headerStyles}>
            <div className='container'>
                <h1>{text}</h1>
            </div>
        </header>
    </Link>
  )
}
Header.defaultProps = {
    text:'FeedBack UI',
    bgColor:'rgba(0,0,0,0.4)',
    textColor:'#ff6a95',
}
Header.propTypes = {
    text:PropTypes.string,
    bgColor:PropTypes.string,
    textColot:PropTypes.string
}
export default Header