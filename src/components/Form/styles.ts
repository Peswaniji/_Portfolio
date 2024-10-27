import styled from "styled-components";

export const Container = styled.div`
  margin-top: 10rem;
  display: grid;
  place-items: center;

  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 1rem;
    width: 100%;

    input, 
    textarea {
      width: 60rem;
      padding: 1rem 2rem;
      border-radius: 1.6rem;
      outline: none;
      border: none;
      background: none;
      border: 1px solid #FFF;
      color: white;
      font-weight: 600;

      &::placeholder {
        color: #FFF;
      }
    }

    textarea {
      height: 20rem;
      overflow-y: auto;
      resize: none;
    }

    button {
      padding: 1rem 6rem;
      text-transform: uppercase;
    }
  }

  @media (max-width: 740px) {
    form {
      width: 100%;

      input,
      textarea {
        width: 100%;
      }
    }
  }
`;

// Success container styling
export const ContainerSucces = styled.div`
  margin-top: 10rem;
  text-align: center;

  button {
    border-radius: 0.6rem;
    padding: 1rem;
    margin-top: 0.8rem;
    text-transform: uppercase;
    text-align: center;
    color: #fbfbfb;
  }
`;

// Mobile number section styling with country code
export const MobileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 60rem;

  select {
    /* Style the country code dropdown */
    max-width: 8rem;
    padding: 1rem 2rem;
    border-radius: 1.6rem;
    outline: none;
    border: 1px solid #FFF;
    background: none;
    color: white;
    font-weight: 600;
    text-align: center;
    appearance: none; /* Hide default dropdown arrow */
    
    &::placeholder {
      color: #FFF;
    }
  }

  input[type="tel"] {
    /* Style the mobile number input */
    flex: 1;
    padding: 1rem 2rem;
    border-radius: 1.6rem;
    outline: none;
    border: 1px solid #FFF;
    background: none;
    color: white;
    font-weight: 600;
    
    &::placeholder {
      color: #FFF;
    }
  }

  @media (max-width: 740px) {
    /* Responsive adjustments for mobile */
    width: 100%;

    select, 
    input[type="tel"] {
      width: 100%;
      max-width: none; /* Remove max-width for full width on smaller screens */
    }
  }
`;
