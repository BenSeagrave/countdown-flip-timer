import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import Footer from './Footer';
import useParseDate from './helpers/useParseDate';

function App() {
  const [currentTime, setCurrentTime] = useState(Date.now());
  const [endTime] = useState(new Date(2021, 4, 22));

  useEffect(() => {
    const handle = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000)
    return (() => {
      clearInterval(handle);
    })
  }, [currentTime]);
  const { days, hours, minutes, seconds, isFinished } = useParseDate(currentTime, endTime);
  if (isFinished) {
    return (
      <StyledContainer>
        <h1>Countdown complete!</h1>
        {/* CONFETTI */}
      </StyledContainer>
    )
  }

  return (
    <StyledContainer>
      <h1>We're Launching Soon</h1>
      <div className="timer">
        <Card digit={days} unit="days" />
        <Card digit={hours} unit="hours" />
        <Card digit={minutes} unit="minutes" />
        <Card digit={seconds} unit="seconds" />
      </div>
      <Footer />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  h1 {
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    position: absolute;
    top: 17%;
    font-size: 0.8rem;
    text-align: center;
    line-height: 2rem;
    @media screen and (min-width: 50em) {
      font-size: 1.6rem;
    }
  }
  
  .timer {
    display: flex;
    justify-content: center;
    /* align-items: center; */
    width: 100%;
  }

  
`;

export default App;
