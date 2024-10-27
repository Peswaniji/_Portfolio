import styled from "styled-components";

export const Container = styled.footer`
  background-color: #2b2b2b;
  padding: 3rem 15rem;
  margin-top: 15rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    font-size: 2.8rem;
  }

  .copyright {
    font-size: 1.4rem;
    color: #fff;
    text-align: center;
    flex: 1; /* Take up available space to center */
    letter-spacing: 0.1rem;
  }

  .social-media {
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      width: 3rem;
    }
  }

  @keyframes spinning {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  /* Responsive styling */
  @media (max-width: 800px) {
    padding: 4rem 10rem;
    flex-direction: column;
    gap: 2rem;
    text-align: center;

    .copyright {
      margin-top: 1rem;
    }
  }

  @media (max-width: 600px) {
    padding: 4rem 1rem;

    .logo {
      font-size: 1.8rem;
    }

    .social-media img {
      width: 2.5rem;
    }
  }
`;
