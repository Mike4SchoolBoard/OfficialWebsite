import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Button, Card, Form, FormLabel, InputGroup } from 'react-bootstrap'

export function Email() {
  const form = useRef()
  const msgElement = useRef()
  const [message, setMessage] = useState('')

  function sendEmail(e) {
    e.preventDefault()

    emailjs.sendForm('service_mwjsfxo', 'template_d4yr0dj', form.current, '-S_sWUsJzJnjVwS4J').then(
      function (response) {
        setMessage('Your email has been successfully sent')
        msgElement.current.className = 'text-success'
      },
      function (error) {
        setMessage(error)
        msgElement.current.className = 'text-danger'
      }
    )

    form.current.reset()
  }
  function resetMessage() {
    setMessage('')
    if (msgElement.current.classList.contains('text-success')) msgElement.current.classList.toggle('text-success')
    if (msgElement.current.classList.contains('text-danger')) msgElement.current.classList.toggle('text-danger')
  }

  return (
    <>
      <Card className="w-100" style={{ height: 'fit-content', fontSize: '1rem' }}>
        <Card.Title className="ps-2">Ask me about my campaign</Card.Title>
        <Card.Body className="p-0 pt-1 ps-2 pb-1 pe-2">
          <Form ref={form} onChange={resetMessage} onSubmit={sendEmail}>
            <Form.Group controlId="user-name">
              <Form.Control name="user_name" type="text" placeholder="Your Name" />
            </Form.Group>
            <Form.Group controlId="user-email" className="mt-1">
              <Form.Control name="user_email" type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="email-content" className="mt-1">
              <Form.Control name="message" as="textarea" rows={2} placeholder="Enter your question here!" />
            </Form.Group>
            <div className="d-flex">
              <Button size="sm" type="submit" value="Send" className="mt-1">
                Submit
              </Button>
              <div className="m-2" ref={msgElement}>
                {message}
              </div>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  )
}
