import React from 'react'
import {
    Card, CardImg, CardBody,
    CardTitle, CardText, Button, Row, Col
} from "reactstrap"
import './SmallCardStyle.css';
import { SmallCardss } from './SmallCardMap';
// import SmallCardss from './SmallCardss'

const SmallCard = () => {
    return (
        <Row>
            <div className='d-flex flex-wrap mt-4' >
   
                    {SmallCardss.map((item) => {
                        return (
                            <Col lg="3" md="4" sm="6" className='p-1'>
                            <Card className='shadow '>
                                <div className='d-flex'>
                                    <div>
                                        <img className='' src={item.src1} width="70px" />
                                    </div>
                                    <div className='mt-2 '>
                                        <b>{item.digit}</b><br />
                                        <p>{item.para1}</p>
                                    </div>
                                </div>
                            </Card>
                            </Col>
                        )
                    })}
                
            </div>
        </Row>
    )
}

export default SmallCard 