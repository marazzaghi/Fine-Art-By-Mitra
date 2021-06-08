import React, { useState } from 'react'
import ReactDOM from "react-dom"
import { Container, Row, Col, Modal, Alert } from 'react-bootstrap'
import './modalContents.scss'

export default function ModalContents(img) {
  const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM })
  const [alertOpen, setAlertOpen] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [variant, setVariant] = useState('')

  const createOrder = (data, actions) =>{
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: data.cost,
          },
          description: data.desc,
        },
      ],
    })
  }

  const onApprove = (data, actions) => {
    setAlertMessage('Art Purchased! Please check your email for a receipt')
    setVariant('success')
    setAlertOpen(true)
    return actions.order.capture()
  }

  const onError = () => {
    setAlertMessage('Error in purchasing')
    setVariant('danger')
    setAlertOpen(true)
  }

  const onCancel = () => {
    setAlertMessage('Transaction Canceled')
    setVariant('warning')
    setAlertOpen(true)
  }
  
  return(
    <>
      <Modal.Header closeButton>
        <Modal.Title>{img.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={6} id="modalImage">
              <img src={img.img} />
            </Col>
            <Col xs={12} md={6}>
              <h3>{img.title}</h3>
              <p><b>Medium:</b> {img.medium}</p>
              {img.cost && (<p><b>Cost:</b> ${img.cost}</p>)}
              {img.description && (<p><b>Artist Notes:</b> {img.description}</p>)}
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      {img.cost && (
        <Modal.Footer>
          <Alert show={alertOpen} variant={variant} id="alert" dismissible onClose={() => setAlertOpen(false)}>
            <Alert.Heading />
            <p>
              {alertMessage}
            </p>
          </Alert>
          <PayPalButton
            style={{ layout: "horizontal", color: "silver", shape: "pill", label: "buynow", height: 40 }}
            createOrder={(data, actions) => createOrder({cost: img.cost, desc: img.title}, actions)}
            onApprove={(data, actions) => onApprove(data, actions)}
            onError={onError}
            onCancel={onCancel}
          />
        </Modal.Footer>
      )}
    </>
  )
}