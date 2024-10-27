import styled from "styled-components";

export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0, 0, 0, 0);
  
  .hero-text {
    & > p {
      font-size: 1.8rem;
      color: #fff; /* Added color for visibility */
    }
    
    h1 {
      font-size: 7rem;
      color: #fff; /* Added color for visibility */
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Added shadow for depth */
    }

    h3 {
      color: var(--green);
      margin: 1rem 0 2rem; /* Added bottom margin for space */
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Added shadow for depth */
    }

    p.small-resume {
      margin-bottom: 5rem;
    }
  }

  .button {
    margin-top: 2rem; /* Adjusted margin for spacing */
    padding: 1.4rem 6rem;
    background-color: var(--green); /* Background color */
    color: #fff; /* Text color */
    border: none; /* Removed border */
    border-radius: 25px; /* Ensured rounded corners */
    cursor: pointer; /* Pointer cursor on hover */
    transition: background-color 0.3s; /* Smooth transition for hover */
    
    &:hover {
      background-color: var(--pink); /* Changed hover color to var(--pink) */
    }
  }

  .hero-image {
    img {
      max-width: 500px;
      border-radius: 15px; /* Added border radius for image */
    }
  }

  .social-media {
    display: flex; /* Use flexbox to arrange icons */
    gap: 1rem; /* Space between icons */
    margin: 2.5rem 1rem 1rem 1rem;

    a {
      img {
        width: 30px; /* Set the width of the icons smaller */
        height: 30px; /* Set the height of the icons smaller */
        transition: transform 0.3s; /* Transition for scaling effect */
      }

      img:hover {
        transform: scale(1.1); /* Scale effect on hover */
      }
    }
  }

  @media(max-width: 960px) {
    display: block;
    margin-top: 15%;
    
    .hero-text {
      h1 {
        font-size: 5rem;
      }
    }

    .hero-image {
      display: none;
    }
  }

  @media(max-width: 600px) {
    margin-top: 25%;
  }
  
  @media(max-width: 480px) {
    margin-top: 35%;
  }
`;
