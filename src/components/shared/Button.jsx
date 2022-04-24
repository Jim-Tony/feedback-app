import React from 'react'
import PropTypes from 'prop-types';
function Button({children,version,type,isDisabled}) {
    // const handleSubmit = (e)=>{
    //     e.preventDefault();
    // }
  return (
    <button type={type} className={`btn btn-${version}`} disabled={isDisabled}>
        {children}
    </button>
  )
}
Button.defaultProps = {
    version:'primary',
    type:'submit',
    isDisabled:false,
}
Button.propTypes = {
    children:PropTypes.node,
    type:PropTypes.string,
    version:PropTypes.string,
    isDisabled:PropTypes.bool
} 

export default Button