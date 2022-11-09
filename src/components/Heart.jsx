import './Heart.css';
import { BsHeart } from "react-icons/bs";
import { BsFillHeartFill } from "react-icons/bs";
import { useState } from 'react';

export const Heart = () => {

  

  
  const [like, setLike] = useState(false);


  const handleClick = () => {
      like === true ? setLike(false) : setLike(true); // Uso de Operador ternario
    
  }

  return (
    <div onClick={handleClick}>
      {like === true ? <BsFillHeartFill className='heart' /> : <BsHeart className='fillHeart' /> }
    </div>
  );
};

