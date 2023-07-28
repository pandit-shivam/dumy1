import React from 'react'
import { Card, Row, Col, Button } from 'reactstrap'
import { LargeCardss } from './LargeCardMap'

const LargeCard = () => {
    return (
        <div className='p-2 largecard11 mt-2'>
           
                <Row className=''>
                    {LargeCardss.map((item)=>{
                        return(
                            <Col lg='3' md='4' sm='6' className='p-1 mt-1'>

                        <Card>
                            <div className="shadow-lg rounded p-2">
                                <div className=''>
                                    <img
                                        src={item.src1}
                                        width='100%'
                                        className=''
                                    />
                                </div>

                                <div className="d-flex pt-1 gap-1">
                                    <img
                                        src={item.src2}
                                        width="50%"
                                    />
                                    <img
                                        src={item.src3}
                                        width="50%"
                                        className=''
                                    />
                                </div>
                                <div className='d-flex justify-content-center gap-2 pt-2'>
                                    <Button color="primary" outline>Primary</Button>
                                    <Button color="danger" >Danger</Button>
                                </div>
                            </div>


                        </Card>

                    </Col>
                        )
                    })}
                </Row>
        </div>
    )
}

export default LargeCard