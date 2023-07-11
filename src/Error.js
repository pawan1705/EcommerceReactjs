import React from 'react'
import Styled from 'styled-components'
import { Button } from "./styles/Button";
import { NavLink } from 'react-router-dom';
const Error = () => {

  return (
    <Wrapper>
      <div className='container'>
        <div>
          <h2>404</h2>
          <h2>UH OH! You're lost,,</h2>
          <p>The page you are looking does not exists.</p>
          <NavLink to="/">
          <Button>Go Back to Homepage</Button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  )
}

  const Wrapper = Styled.section`
  .container {
    padding: 9rem 0;
    text-align: center;

    h2 {
      font-size: 10rem;
    }

    h3 {
      font-size: 4.2rem;
    }

    p {
      margin: 2rem 0;
    }
  }
`;
export default Error