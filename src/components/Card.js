import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components";

const Card = ({ digit, unit }) => {
  const [active, setActive] = useState(false);
  const prevCountRef = useRef();
  useEffect(() => {
    const prevCount = prevCountRef.current;
    if (prevCount !== digit) {
      setActive(true);
    }
  }, [digit]);

  const animationEnd = (e) => {
    setActive(false)
    prevCountRef.current = digit;
  }

  return (
    <StyledCard>
      <div className="back">
        <div className="top">
          <p className="digit">{digit}</p>
        </div>
        <div className="bottom">
          <p className="digit">{prevCountRef.current}</p>
        </div>
      </div>
      <div className="front">
        <div onAnimationEnd={animationEnd} className={`top ${active ? 'active' : ''}`}>
          <p className="digit">{prevCountRef.current}</p>
        </div>
        <div onAnimationEnd={animationEnd} className={`bottom ${active ? 'active' : ''}`}>
          <p className="digit">{digit}</p>
        </div>
      </div>

      <p className="unit">{unit}</p>
    </StyledCard>
  )
}

export default Card

const StyledCard = styled.div`
  /* width: 150px; */
  width: 18%;
  max-width: 100px;
  margin: 0 0.5rem;
  position: relative;
  text-align: center;

  @media screen and (min-width: 50em) {
      margin: 0 1.5rem;
      max-width: 150px;
  } 
  
  .top {
    background: #2C2C44;
    height: 30px;
    border-radius: 10px 10px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    @media screen and (min-width: 50em) {
      width: 150px;
      height: 70px;

    }
    &::before {
      content: "";
      position: absolute;
      width: 4px;
      height: 4px;
      background: var(--very-dark-black-blue);
      left: 0;
      bottom: 0%;
      border-radius: 0 100% 0 0;

      @media screen and (min-width: 50em) {
        width: 8px;
        height: 8px;
      }
    }
    &::after {
      content: "";
      position: absolute;
      width: 4px;
      height: 4px;
      background: var(--very-dark-black-blue);
      border-radius: 100% 0 0 0;
      right: 0%;
      bottom: 0%;

      @media screen and (min-width: 50em) {
        width: 8px;
        height: 8px;
      }
    }
    .digit {
      position: absolute;
      top: 29%;
      color: hsla(var(--soft-red-hsl), 0.75);
    }
  }
  .bottom {
    margin-top: 1px;
    background: #34364F;
    height: 30px;
    width: 100%;
    border-radius: 0 0 10px 10px;
    display: flex;
    justify-content: center;
    overflow: hidden;
    align-items: center;
    position: relative;

    @media screen and (min-width: 50em) {
      width: 150px;
      height: 70px;
    }
    &::before {
      content: "";
      position: absolute;
      width: 4px;
      height: 4px;
      background: var(--very-dark-black-blue);
      border-radius: 0 0 100% 0;
      left: 0%;
      top: 0%;

      @media screen and (min-width: 50em) {
        width: 8px;
        height: 8px;
      }
    }
    &::after {
      content: "";
      position: absolute;
      width: 4px;
      height: 4px;
      background: var(--very-dark-black-blue);
      border-radius: 0 0 0 100%;
      right: 0%;
      top: 0%;

      @media screen and (min-width: 50em) {
        width: 8px;
        height: 8px;
      }
    }
    .digit {
      position: absolute;
      bottom: 30%;
    }
  }
  .front {
    perspective: 1000px;
    .top {
      animation: none;
      transform-origin: bottom;
      &.active {
        animation: "top-to-bottom" 0.8s 1;
      }
    }
    .bottom {
      transform-origin: top;
      &.active {
        animation: "bottom-to-top" 0.6s 1;
      }
    }
  }
  .back {
    position: absolute;
    top: 0;
    width: 100%;

  }
  .unit {
    margin-top: 10px;
    font-size: 0.6rem;
    font-weight: bold;
    text-transform: uppercase;
    color: var(--grayish-blue);
    letter-spacing: 0.2rem;
    text-align: center;

    @media screen and (min-width: 50em) {
    font-size: 0.8rem;
    letter-spacing: 0.5rem;
    }
  }
  .digit {
    color: var(--soft-red);
    font-size: 2rem;
    font-weight: bold;
    @media screen and (min-width: 50em) {
      font-size: 4.8rem;
    }
  }

  
`;