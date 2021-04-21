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
      clearInterval(handle)
    })
  }, [currentTime, endTime]);

  const { days, hours, minutes, seconds, isFinished } = useParseDate(currentTime, endTime);
  if (isFinished) {
    return (
      <StyledContainer>
        <h1>Countdown complete!</h1>
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
  width: 800px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 100px;
  }

  .timer {
    display: flex;
  }
  
  .card {
    width: 200px;
    background: grey;
    margin: 0 15px;
  }
`;


export default App;
