import React from 'react';
import styled from 'styled-components';

const App = () => (
  <AppContainer>
    <Intro>
      Weclome to my CRA-Template!
    </Intro>
  </AppContainer>
)

export default App

const AppContainer = styled.div`
display: flex;
jusfify-content: center;
align-items: center;

height: 100vh;
backgroungd: #1d1f27;
`

const Intro = styled.p`
font-size: 2.5vw;
color: #ffff;
`