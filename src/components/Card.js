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
      position: relative;
      &::before {
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        background: var(--very-dark-black-blue);
        left: 0;
        bottom: 0%;
        border-radius: 0 100% 0 0;
      }
      &::after {
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        background: var(--very-dark-black-blue);
        border-radius: 100% 0 0 0;
        right: 0%;
        bottom: 0%;
      }
      .digit {
        position: absolute;
        top: 25%;
      }
    }
    .bottom {
      margin-top: 1px;
      background: #34364F;
      height: 70px;
      width: 150px;
      border-radius: 0 0 10px 10px;
      display: flex;
      justify-content: center;
      overflow: hidden;
      align-items: center;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        background: var(--very-dark-black-blue);
        border-radius: 0 0 100% 0;
        left: 0%;
        top: 0%;
      }
      &::after {
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        background: var(--very-dark-black-blue);
        border-radius: 0 0 0 100%;
        right: 0%;
        top: 0%;
      }
      .digit {
        position: absolute;
        bottom: 25%;
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