import React, { useState } from 'react'
import { Container, Row, Col, Collapse } from 'react-bootstrap'
import './biography.scss'
import mitra from '../../images/mitra.jpeg'

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
                Mitra A Razzaghi, MD is a practicing women's health physician and an artist. Born in Tehran, she was surrounded and influenced by the natural beauty of her environment, as well as thousands of years of old Persian art. She moved to the US in early 1990's and has been living in Aurora, Colorado since the early 2000's. Practicing her visual art—as time allowed—during her studies in medical school, medical practice, during teaching as professor of medicine, and medical directorship of her practice, she applied her talent to the art of medicine for years. While her responsibilities as a mother of two wonderful sons stabilized, she picked up her life long passion of painting. She has studied classical barque methods and realism oil painting and enjoys Impressionism equally. Her drawings and paintings have been featured at a local college, University of Colorado Health Sciences art exhibitions, as well as office of Dean of University of Colorado Medical School.
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