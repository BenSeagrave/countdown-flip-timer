import React from "react"
import styled from "styled-components";

const Card = ({ digit, unit }) => {
  return (
    <StyledCard>
      <div class="countdown">
        <div class="top">
          <p class="digit">{digit}</p>
        </div>
        <div class="bottom">
          <p class="digit">{digit}</p>
        </div>
      </div>
      <div class="flip">
        <div class="top">
          <p class="digit">{digit}</p>
        </div>
        <div class="bottom">
          <p class="digit">{digit}</p>
        </div>
      </div>
      <p class="unit">{unit}</p>
    </StyledCard>
  )
}

export default Card

const StyledCard = styled.div`
    width: 150px;
    margin: 0 15px;
    position: relative;
    .top {
      background: #2C2C44;
      height: 70px;
      border-radius: 10px 10px 0 0;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      &::before {
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        background: black;
        left: 0;
        bottom: 50%;
        border-radius: 0 100% 0 0;
      }
      &::after {
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        background: black;
        border-radius: 100% 0 0 0;
        right: 0%;
        bottom: 50%;
      }
      .digit {
        position: absolute;
        top: 12%;
      }
    }
    .bottom {
      background: #34364F;
      height: 70px;
      width: 150px;
      border-radius: 0 0 10px 10px;
      display: flex;
      justify-content: center;
      overflow: hidden;
      align-items: center;
      &::before {
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        background: black;
        border-radius: 0 0 100% 0;
        left: 0%;
        top: 50%;
      }
      &::after {
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        background: black;
        border-radius: 0 0 0 100%;
        right: 0%;
        top: 50%;
      }
      .digit {
        position: absolute;
        bottom: 13%;
      }
    }
    .flip {
      position: absolute;
      top: 0;
    }
    .unit {
      margin-top: 30px;
      font-size: 0.8rem;
      font-weight: bold;
      text-transform: uppercase;
      color: var(--grayish-blue);
      letter-spacing: 0.5rem;
      text-align: center;
    }
    .digit {
      color: var(--soft-red);
      font-size: 5rem;
      font-weight: bold;
    }
`;