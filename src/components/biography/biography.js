import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './biography.scss'
import mitra from '../../images/siteImages/mitraPainting.jpeg'

export default function Biography() {
  return (
    <div id="bio">
      <h2>About the Artist</h2>
      <Container>
        <Row>
          <Col md={12} lg={5}>
            <img src={mitra} alt="headshot of the artist Mitra Razzaghi" id="mitraPainting" />
          </Col>
          <Col md={12} lg={{ span: 6, offset: 1 }}>
            <p>
              Mitra A Razzaghi, MD is a practicing women's health physician and an artist. Born in Tehran, she was surrounded and influenced by the natural beauty of her environment, as well as thousands-year-old Persian art. She moved to the US in the early 1990s and has been living in Aurora, Colorado with her family for many years. Working intermittently on visual art during her studies in medical school, and later in clinical practice, training medical students and residents, and leading her practice, she has applied her talent to the art of medicine for years. As her responsibilities stabilized, she continued her lifelong passion for painting more vigorously. She has studied classical drawing and oil painting at REAL Academy of Art under instruction of an ARC accredited living master. Her drawings and paintings have been featured at local colleges, University of Colorado Health Sciences art exhibitions, as well as the office of the Dean of the University Of Colorado Medical School. Her work has also been published in the Human Touch Journal.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}