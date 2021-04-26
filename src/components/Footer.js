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
  position: fixed;
  top: 90%;
  display: flex;
  width: 12%;
  justify-content: space-around;
  align-items: center;
`;

export default Footer
