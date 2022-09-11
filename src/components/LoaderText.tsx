import React from 'react';
import styled from "styled-components";

const LoaderText = () => {
  return (
    <Loader></Loader>
  )
}

const Loader = styled.div`
  width: 80px;
  height: 15px;
  border-radius: 3px;
  background: linear-gradient(	  
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 80%
    ),
    lightgray;
  background-repeat: repeat-y;
  background-size: 20px 20px;
  background-position: 0 0;
  animation: shine 1s infinite;	  
}
@keyframes shine {
  to {
    background-position: 100% 0, 0 0;
  }
}
`;

export default LoaderText