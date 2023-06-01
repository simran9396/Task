import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Management } from './Icons';

const AllCategories = () => {
    return (
        <div className='categories_page'>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className='heading_area'>
                            <h3>Recent</h3>
                        </div>
                    </Col>
                    <Col md={3} xs={3}>
                        <div className='FliedBoxIcon'>
                            <div>
                                <Management />
                                <p > <a href="/all-list"> Facility  Management</a></p>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} xs={3}>
                        <div className='FliedBoxIcon'>
                            <div>
                                <Management />
                                <p >Facility  Management</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col md={12}>
                        <div className='heading_area'>
                            <h3>All Categories</h3>
                        </div>
                    </Col>
                    <Col md={3} xs={3}>
                        <div className='FliedBoxIcon'>
                            <div>
                                <Management />
                                <p >Facility  Management</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} xs={3}>
                        <div className='FliedBoxIcon'>
                            <div>
                                <Management />
                                <p >Facility  Management</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} xs={3}>
                        <div className='FliedBoxIcon'>
                            <div>
                                <Management />
                                <p >Facility  Management</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} xs={3}>
                        <div className='FliedBoxIcon'>
                            <div>
                                <Management />
                                <p >Facility  Management</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} xs={3}>
                        <div className='FliedBoxIcon'>
                            <div>
                                <Management />
                                <p >Facility  Management</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} xs={3}>
                        <div className='FliedBoxIcon'>
                            <div>
                                <Management />
                                <p >Facility  Management</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} xs={3}>
                        <div className='FliedBoxIcon'>
                            <div>
                                <Management />
                                <p >Facility  Management</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} xs={3}>
                        <div className='FliedBoxIcon'>
                            <div>
                                <Management />
                                <p >Facility  Management</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} xs={3}>
                        <div className='FliedBoxIcon'>
                            <div>
                                <Management />
                                <p >Facility  Management</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} xs={3}>
                        <div className='FliedBoxIcon'>
                            <div>
                                <Management />
                                <p >Facility  Management</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} xs={3}>
                        <div className='FliedBoxIcon'>
                            <div>
                                <Management />
                                <p >Facility  Management</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AllCategories