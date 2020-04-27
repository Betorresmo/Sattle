import styled from 'styled-components';
import { transparentize } from 'polished';

export const RepositoryDetail = styled.div`
  max-width: 850px;
  padding: 1rem;

  header {
    color: #ececec;
    display: flex;
    align-items: center;
    img {
      width: 6rem;
      height: 6rem;
      border-radius: 50%;
    }
    div {
      margin-left: 1rem;
      flex: 1;
      strong {
        font-size: 1.5rem;
      }
      p {
        color: ${transparentize(0.7, '#ececec')};
      }
    }
  }

  ul {
    list-style: none;
    color: #ececec;
    display: flex;
    margin-top: 2rem;
    justify-content: space-between;
    max-width: 425px;

    li {
      display: flex;
      flex-direction: column;

      strong {
        font-size: 25px;
      }
      span {
        color: ${transparentize(0.7, '#ececec')};
      }
    }
  }
`;

export const Issues = styled.section`
  max-width: 850px;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;

  a {
    color: #ececec;
    background: ${transparentize(0.95, '#ececec')};
    border-radius: 3px;
    padding: 1rem;
    display: flex;
    align-items: center;
    transition: all 300ms ease;

    &:first-child {
      border-radius: 3rem 3px 3px 3px;
    }

    &:last-child {
      border-radius: 3px 3px 3rem 3px;
    }

    &:hover {
      background: ${transparentize(0.94, '#ececec')};
      transform: translateX(2rem);
      border-radius: 3rem 3px 3rem 3px;
    }

    & + a {
      margin-top: 1rem;
    }

    div {
      margin-left: 1rem;
      flex: 1;
      strong {
        font-size: 1.5rem;
      }
      p {
        color: ${transparentize(0.7, '#ececec')};
      }
    }

    svg {
      margin-right: 1rem;
      color: ${transparentize(0.5, '#ececec')};
      height: 1rem;
    }
  }
`;
