import React from 'react'
import { Container, Nav, Navbar, InputGroup, Form } from 'react-bootstrap'
import '../App.css'
const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" style={{ 'box-shadow': '0px 3px 20px rgba(0, 0, 0, 0.2)' }}>
                <Container>
                    <div className='d-flex justify-content-between align-items-start w-100' style={{ 'grid-column-gap': '10px' }}>
                        <div>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />

                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </div>
                        <div className='search_bar'>
                            <InputGroup className="custom_seachbar">
                                <Form.Select aria-label="Default select example" className='productSelect '>
                                    <option>Products</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                                <Form.Control placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" className=' border-0' />
                                <div className='search_icon'>
                                    <i className='fa fa-search'></i>
                                </div>
                            </InputGroup>
                        </div>
                        <div className='filtertext mt-2'>
                            <h4 className='m-0'><i class="fa-solid fa-filter px-2"></i>filter</h4>
                        </div>
                    </div>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header