import styled, { css } from 'styled-components';
import { transparentize, lighten } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Error = styled.span`
  position: absolute;
  color: #f54248;
  top: -1.8rem;
  margin-left: 1rem;
`;

export const SearchBar = styled.form<FormProps>`
  max-width: 850px;
  display: flex;
  position: relative;
  border: 2px solid #222831;
  border-radius: 1.5rem 3px 1.5rem 3px;

  ${props =>
    props.hasError &&
    css`
      border-color: #f54248;
    `}

  input {
    flex: 4;
    height: 3rem;
    border: 0;
    background: ${transparentize(0.95, '#ececec')};
    border-radius: 1.5rem 0 0 3px;
    color: #ececec;
    padding: 0 1rem;

    &::placeholder {
      color: ${transparentize(0.7, '#ececec')};
    }
  }

  button {
    padding: 0 2rem;
    border: 0;
    border-radius: 0 3px 1.5rem 0;
    background: #30475e;
    color: #ececec;
    transition: background-color 200ms, color 1000ms;

    &:hover {
      background-color: ${lighten(0.05, '#30475e')};
      color: #171717;
    }
  }
`;

export const Repositories = styled.section`
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

    img {
      width: 4rem;
      height: 4rem;
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

    svg {
      margin-right: 1rem;
      color: ${transparentize(0.5, '#ececec')};
      height: 1rem;
    }
  }
`;
