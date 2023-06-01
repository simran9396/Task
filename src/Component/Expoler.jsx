import React from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'
import Slider from "react-slick";
import { Management } from './Icons';
import Cardimages from "../images/IMAGE.png"
function Expoler() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        className: ''
    };
    const trending = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        className: 'flex',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }]

    }
    const feature = {
        dots: false,
        infinite: true,
        autoplay: true,
        loop: true,
        centerPadding: '60px',
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        className: 'flex',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]

    }
    return (
        <React.Fragment>
            <Container className='d-flex justify-content-between align-items-center mt-5'>
                <h3 className='justify-end width-80'> Explore Popular Categories</h3>
                <a className='ViewAll' href='/all-categories'>View All</a>
            </Container>
            <Container>
                <Row>
                    <Slider {...settings} className="flex">
                        <div className='FliedBoxIcon'>
                            <div>
                                <Management />
                                <p >Facility  Management</p>
                            </div>
                        </div>
                        <div className='FliedBoxIcon'>
                            <div>
                                <Management />
                                <p >Facility  Management</p>
                            </div>
                        </div>
                        <div className='FliedBoxIcon'>
                            <div>
                                <Management />
                                <p >Facility  Management</p>
                            </div>
                        </div>
                        <div className='FliedBoxIcon'>
                            <div>
                                <Management />
                                <p >Facility  Management</p>
                            </div>
                        </div>
                        <div className='FliedBoxIcon'>
                            <div>
                                <Management />
                                <p >Facility  Management</p>
                            </div>
                        </div>
                        <div className='FliedBoxIcon'>
                            <div>
                                <Management />
                                <p >Facility  Management</p>
                            </div>
                        </div>
                        <div className='FliedBoxIcon'>
                            <div>
                                <Management />
                                <p >Facility  Management</p>
                            </div>
                        </div>
                        <div className='FliedBoxIcon'>
                            <div>
                                <Management />
                                <p >Facility  Management</p>
                            </div>
                        </div>
                        <div className='FliedBoxIcon'>
                            <div>
                                <Management />
                                <p >Facility  Management</p>
                            </div>
                        </div>
                    </Slider>
                </Row>
            </Container>

            <Container className='d-flex justify-content-between align-items-center mt-5'>
                <h3 className='justify-end width-80'> Explore Popular Categories</h3>
                <a className='ViewAll'>View All</a>



            </Container>
            <Container>
                <Row>
                    <Slider {...trending}>
                        <div>
                            <Card>
                                <Card.Img variant="top" src={Cardimages} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    MENS SEIKO KENETIC TITANIUM 100M WRIST WATCH! No Reserve!
                                    $18.50
                                    </Card.Text>
                                    <span style={{color:'red'}}>6d 13h 52 sec</span>
                                 

                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card >
                                <Card.Img variant="top" src={Cardimages} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    MENS SEIKO KENETIC TITANIUM 100M WRIST WATCH! No Reserve!
                                    $18.50

                                    </Card.Text>
                                    <span style={{color:'red'}}>6d 13h 52 sec</span>

                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card >
                                <Card.Img variant="top" src={Cardimages} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    MENS SEIKO KENETIC TITANIUM 100M WRIST WATCH! No Reserve!
                                    $18.50

                                    </Card.Text>
                                    <span style={{color:'red'}}>6d 13h 52 sec</span>

                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card >
                                <Card.Img variant="top" src={Cardimages} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    MENS SEIKO KENETIC TITANIUM 100M WRIST WATCH! No Reserve!
                                    $18.50

                                    </Card.Text>
                                    <span style={{color:'red'}}>6d 13h 52 sec</span>

                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card >
                                <Card.Img variant="top" src={Cardimages} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    MENS SEIKO KENETIC TITANIUM 100M WRIST WATCH! No Reserve!
                                    $18.50

                                    </Card.Text>
                                    <span style={{color:'red'}}>6d 13h 52 sec</span>

                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card >
                                <Card.Img variant="top" src={Cardimages} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    MENS SEIKO KENETIC TITANIUM 100M WRIST WATCH! No Reserve!
                                    $18.50

                                    </Card.Text>
                                    <span style={{color:'red'}}>6d 13h 52 sec</span>

                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card >
                                <Card.Img variant="top" src={Cardimages} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    MENS SEIKO KENETIC TITANIUM 100M WRIST WATCH! No Reserve!
                                    $18.50

                                    </Card.Text>
                                    <span style={{color:'red'}}>6d 13h 52 sec</span>

                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card >
                                <Card.Img variant="top" src={Cardimages} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    MENS SEIKO KENETIC TITANIUM 100M WRIST WATCH! No Reserve!
                                    $18.50

                                    </Card.Text>
                                    <span style={{color:'red'}}>6d 13h 52 sec</span>

                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            </Card>
                        </div>

                    </Slider>
                </Row>
            </Container>


            <Container className='d-flex justify-content-between align-items-center mt-5'>
                <h3 className='justify-end width-80'> Explore Popular Categories</h3>
                <a className='ViewAll'>View All</a>
            </Container>


            <Container>
                <Row>
                    <Slider {...feature} className="flex">
                        <div className=' box-shadow_Card'>
                            <div className='d-flex wrapperCard'>
                                <button className='newLabs'> New </button>
                                <button className='newLabs'>Scheduled</button>
                            </div>
                            <div className='Wrappertext'>
                                <h5>Requirement of 2000 Diodes
                                    at Nasik plant</h5>
                                <div className='CelenderWrapper'>
                                    <h6>Nov</h6>
                                    <p>18</p>
                                </div>
                            </div>
                            <p>Sat, 02:PM onwards</p>
                            <div className='d-flex userDetails'>
                                <div className='CircleBtn'>

                                </div>
                                <div>
                                    <h3>Andrew Smith</h3>
                                    <p>Global foundries</p>
                                </div>
                            </div>
                        </div>
                        <div className=' box-shadow_Card'>
                            <div className='d-flex wrapperCard'>
                                <button className='newLabs'> New </button>
                                <button className='newLabs'>Scheduled</button>
                            </div>
                            <div className='Wrappertext'>
                                <h5>Requirement of 2000 Diodes
                                    at Nasik plant</h5>
                                <div className='CelenderWrapper'>
                                    <h6>Nov</h6>
                                    <p>18</p>
                                </div>
                            </div>
                            <p>Sat, 02:PM onwards</p>
                            <div className='d-flex userDetails'>
                                <div className='CircleBtn'>

                                </div>
                                <div>
                                    <h3>Andrew Smith</h3>
                                    <p>Global foundries</p>
                                </div>
                            </div>
                        </div>
                        <div className=' box-shadow_Card'>
                            <div className='d-flex wrapperCard'>
                                <button className='newLabs'> New </button>
                                <button className='newLabs'>Scheduled</button>
                            </div>
                            <div className='Wrappertext'>
                                <h5>Requirement of 2000 Diodes
                                    at Nasik plant</h5>
                                <div className='CelenderWrapper'>
                                    <h6>Nov</h6>
                                    <p>18</p>
                                </div>
                            </div>
                            <p>Sat, 02:PM onwards</p>
                            <div className='d-flex userDetails'>
                                <div className='CircleBtn'>

                                </div>
                                <div>
                                    <h3>Andrew Smith</h3>
                                    <p>Global foundries</p>
                                </div>
                            </div>
                        </div>
                        <div className=' box-shadow_Card'>
                            <div className='d-flex wrapperCard'>
                                <button className='newLabs'> New </button>
                                <button className='newLabs'>Scheduled</button>
                            </div>
                            <div className='Wrappertext'>
                                <h5>Requirement of 2000 Diodes
                                    at Nasik plant</h5>
                                <div className='CelenderWrapper'>
                                    <h6>Nov</h6>
                                    <p>18</p>
                                </div>
                            </div>
                            <p>Sat, 02:PM onwards</p>
                            <div className='d-flex userDetails'>
                                <div className='CircleBtn'>

                                </div>
                                <div>
                                    <h3>Andrew Smith</h3>
                                    <p>Global foundries</p>
                                </div>
                            </div>
                        </div>
                        <div className=' box-shadow_Card'>
                            <div className='d-flex wrapperCard'>
                                <button className='newLabs'> New </button>
                                <button className='newLabs'>Scheduled</button>
                            </div>
                            <div className='Wrappertext'>
                                <h5>Requirement of 2000 Diodes
                                    at Nasik plant</h5>
                                <div className='CelenderWrapper'>
                                    <h6>Nov</h6>
                                    <p>18</p>
                                </div>
                            </div>
                            <p>Sat, 02:PM onwards</p>
                            <div className='d-flex userDetails'>
                                <div className='CircleBtn'>

                                </div>
                                <div>
                                    <h3>Andrew Smith</h3>
                                    <p>Global foundries</p>
                                </div>
                            </div>
                        </div>
                        <div className=' box-shadow_Card'>
                            <div className='d-flex wrapperCard'>
                                <button className='newLabs'> New </button>
                                <button className='newLabs'>Scheduled</button>
                            </div>
                            <div className='Wrappertext'>
                                <h5>Requirement of 2000 Diodes
                                    at Nasik plant</h5>
                                <div className='CelenderWrapper'>
                                    <h6>Nov</h6>
                                    <p>18</p>
                                </div>
                            </div>
                            <p>Sat, 02:PM onwards</p>
                            <div className='d-flex userDetails'>
                                <div className='CircleBtn'>

                                </div>
                                <div>
                                    <h3>Andrew Smith</h3>
                                    <p>Global foundries</p>
                                </div>
                            </div>
                        </div>

                    </Slider>
                    
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Expoler