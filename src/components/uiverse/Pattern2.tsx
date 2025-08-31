import React from 'react';
import styled from 'styled-components';

const Pattern2 = () => {
  return (
    <StyledWrapper>
      <div className="container" />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container {
    width: 100%;
    height: 100%;
    /* Add your background pattern here */
    background-color: #313131;
    background-image: radial-gradient(
      rgba(255, 255, 255, 0.171) 2px,
      transparent 0
    );
    background-size: 30px 30px;
    background-position: -5px -5px;
  }
`;

export default Pattern2;
