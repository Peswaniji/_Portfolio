import { Container, ContainerSucces } from './styles'
import { useForm, ValidationError } from '@formspree/react'
import { toast, ToastContainer } from 'react-toastify'
import { useEffect, useState } from 'react'
import validator from 'validator'

export function Form() {
  const [state, handleSubmit] = useForm('xrbgeeko')
  
  const [validEmail, setValidEmail] = useState(false)
  const [message, setMessage] = useState('')
  const [countryCode, setCountryCode] = useState('+91')
  const [mobileNumber, setMobileNumber] = useState('')
  
  function verifyEmail(email: string) {
    setValidEmail(validator.isEmail(email))
  }

  function verifyMobileNumber(number: string) {
    const isValid = /^[0-9]{0,10}$/.test(number)
    if (isValid) setMobileNumber(number)
  }

  useEffect(() => {
    if (state.succeeded) {
      toast.success('Email successfully sent!', {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: 'succeeded',
      })
    }
  }, [state.succeeded])

  if (state.succeeded) {
    return (
      <ContainerSucces>
        <h3>Thanks for getting in touch!</h3>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          Back to the top
        </button>
        <ToastContainer />
      </ContainerSucces>
    )
  }

  return (
    <Container>
      <h2>Get in touch using the form below</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          onChange={(e) => {
            verifyEmail(e.target.value)
          }}
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          

          <input
            placeholder="Mobile Number"
            id="mobile"
            type="text"
            name="mobile"
            value={mobileNumber}
            onChange={(e) => verifyMobileNumber(e.target.value)}
            maxLength={10}
            required
          />
        </div>

        <textarea
          required
          placeholder="Leave your message"
          id="message"
          name="message"
          onChange={(e) => {
            setMessage(e.target.value)
          }}
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <button
          type="submit"
          disabled={state.submitting || !validEmail || !message || mobileNumber.length < 10}
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </Container>
  )
}
