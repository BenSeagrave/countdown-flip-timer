import styled from 'styled-components';
import Footer from './Footer';

function App() {
  return (
    <StyledContainer>
      <h1>We're Launching Soon</h1>
      <div className="timer">
        <div className="card">
          <h2>08</h2>
          <p>days</p>
        </div>
        <div className="card">
          <h2>23</h2>
          <p>hours</p>
        </div>
        <div className="card">
          <h2>55</h2>
          <p>minutes</p>
        </div>
        <div className="card">
          <h2>41</h2>
          <p>seconds</p>
        </div>
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
