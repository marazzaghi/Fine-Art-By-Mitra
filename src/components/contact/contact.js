import React, { useState } from 'react'
import { Form, Button, Collapse, Row, Col } from 'react-bootstrap'
import { sendEmail } from '../../services/email'

import './contact.scss'

export default function Contact() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    sendEmail({name, email, message})
  }

  return (
    <div id="contact">
      <h2 onClick={() => setOpen(!open)}>Contact the Artist</h2>
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