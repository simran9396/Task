import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
function Tabs() {
  return (
    <div className='TabsWrapper'>
       <Container>
       <Row>
        <Col md={4} xs={4}>
            <div className='box_1'>
                 <h3>Request anything</h3>
            </div>
        </Col>
        <Col md={4}  xs={4}>
            <div className='box_1'>
                 <h3>Request anything</h3>
            </div>
        </Col>
          
        <Col md={4}  xs={4}>
            <div className='box_1'>
                 <h3>Request anything</h3>
            </div>
        </Col>
          
          
       </Row>
       </Container>
    </div>
  )
}

export default Tabs