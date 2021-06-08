import React, { useState } from 'react'
import { Container, Row, Col, Collapse } from 'react-bootstrap'
import './biography.scss'
import mitra from '../../images/mitra.jpg'

export default function Biography() {
  const [open, setOpen] = useState(false)
  return (
    <div id="bio">
      <h2 onClick={() => setOpen(!open)}>About the Artist</h2>
      <Collapse in={open}>
        <Container>
          <Row>
            <Col md={12} lg={6}>
              <p>
                Mitra A Razzaghi, MD is a practicing women's health physician and an artist. Born in Tehran, she was surrounded and influenced by the natural beauty of her environment, as well as thousands-year-old Persian art. She moved to the US in the early 1990s and has been living in Aurora, Colorado with her family for many years. Working intermittently on visual art during her studies in medical school, and later in clinical practice, training medical students and residents, and leading her practice, she has applied her talent to the art of medicine for years. As her responsibilities stabilized, she continued her lifelong passion for painting more vigorously. She has studied classical drawing and oil painting at REAL Academy of Art under instruction of an ARC accredited living master. Her drawings and paintings have been featured at local colleges, University of Colorado Health Sciences art exhibitions, as well as the office of the Dean of the University Of Colorado Medical School. Her work has also been published in the Human Touch Journal.
              </p>
            </Col>
            <Col md={12} lg={6}>
              <img src={mitra} alt="headshot of the artist Mitra Razzaghi" />
            </Col>
          </Row>
        </Container>
      </Collapse>
    </div>
  )
}