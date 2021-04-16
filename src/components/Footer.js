import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledFooter>
      <img src="../icon-facebook.svg" alt="facebook" />
      <img src="../icon-pinterest.svg" alt="facebook" />
      <img src="../icon-instagram.svg" alt="facebook" />
    </StyledFooter>
  )
}

const StyledFooter = styled.div`
  background-image: url('../pattern-hills.svg');
  position: fixed;
  top: 90%;

`;

export default Footer
