import styled from 'styled-components';

export const Logo = styled.nav`
  h1 {
    display: flex;
    width: fit-content;
    color: #ececec;
    font-size: 2rem;
    align-items: center;
    cursor: pointer;

    transition: transform 200ms ease;

    &:hover {
      transform: scale(1.05);
    }

    svg {
      margin-right: 0.5rem;
    }
  }

  h2 {
    font-size: 1rem;
    color: #30475e;
    margin-top: 0.5rem;
    margin-bottom: 3rem;
  }
`;
