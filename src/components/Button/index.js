import React from 'react';
import './styles.scss';

const Button = ({children, onClick, type}) => {
  return (
    <button className="buttons" onClick={onClick} type={type}>
      {children}
    </button>
  );
}

Button.defaltProps = {
  type: 'button'
};

export default Button;