import React, { useEffect } from 'react'
import { Container, Col, Image, Row, Card, Button } from 'react-bootstrap'
import img from '../assets/logo192.png'
import bigStar from '../assets/bigStar.png'
import { useParams } from 'react-router-dom'
import { fetchOneDevice } from '../store/action/DeviceAction'
import { useDispatch, useSelector } from 'react-redux'

const DevicePage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { oneDevice } = useSelector((state) => state.device)

  useEffect(() => {
    dispatch(fetchOneDevice(id))
  }, [])

  return (
    <Container className='mt-3'>
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={process.env.REACT_APP_API_URL + oneDevice.img} />
        </Col>
        <Col md={4}>
          <div className="d-flex flex-column align-items-center">
            <h2>{oneDevice.name}</h2>
            <div 
              className='d-flex align-items-center justify-content-center'
              style={{background: `url(${bigStar}) no-repeat center center`, width:240, height:240, backgroundSize: 'cover', fontSize:64}}
            >
              {oneDevice.rating}
            </div>
          </div>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
          >
            <h3>Da: {oneDevice.price} $</h3>
            <Button variant={"outline-dark"}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <div className="d-flex flex-column m-3">
        <h1>Caratteristice</h1>
        {oneDevice.info?.map((info, index) =>
          <div key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
              {info.title}: {info.description}
          </div>
        )}
      </div>
    </Container>
  )
}

export default DevicePage