import React, { useState } from 'react'
import { Form, Button, Collapse, Row, Col, Toast, Alert } from 'react-bootstrap'
import { sendEmail } from '../../services/email'
import emailjs from 'emailjs-com';

import './contact.scss'

const REACT_APP_SERVICE_ID = process.env.REACT_APP_SERVICE_ID  
const REACT_APP_TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID  
const REACT_APP_USER_ID = process.env.REACT_APP_USER_ID

export default function Contact() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState('')
  const [message, setMessage] = useState('')
  const [alertOpen, setAlertOpen] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [variant, setVariant] = useState('')

  const handleSubmit = (event) => {
    sendEmail({name, email, message})
  }

  function sendEmail(e) {

    emailjs.send(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID,{
      from_name: name,
      message: message,
      reply_to: email,
      }, REACT_APP_USER_ID
    ).then((result) => {
        setName('')
        setEmail('')
        setMessage('')
        setAlertMessage('Email sent successfully!')
        setVariant('success')
        setAlertOpen(true)
    }, (error) => {
        setAlertMessage('Something went wrong, please try again. If the issue persists, you can email us at contact@fineartbymitra.com')
        setVariant('danger')
        setAlertOpen(true)
    });
  }

  return (
    <div id="contact">
      <h2 onClick={() => setOpen(!open)}>Contact the Artist</h2>
      <Alert show={alertOpen} variant={variant} id="alert">
        <p>
         {alertMessage}
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setAlertOpen(false)} variant={"outline-" + variant}>
            Close
          </Button>
        </div>
      </Alert>
      <Row>
        <Col lg={6} id="contactForm">
          <Collapse in={open}>
            <Form>
            <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="Enter name" onChange={(e) => setName(e.target.value)}/>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message to Artist</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={(e) => setMessage(e.target.value)}/>
              </Form.Group>
              <Button variant="primary" onClick={() => sendEmail({name, email, message})}>
                Submit
              </Button>
            </Form>
          </Collapse>
        </Col>
      </Row>
    </div>
  )
}