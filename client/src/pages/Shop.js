import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BrandBar from '../component/BrandBar'
import DeviceList from '../component/DeviceList'
import TypeBar from '../component/TypeBar'
import { fetchTypes, fetchBrands, fetchDevices } from '../store/action/DeviceAction'
import { useDispatch, useSelector } from 'react-redux'
import Pages from '../component/Pages'

const Shop = () => {
  const dispatch = useDispatch()
  const { page, selectedType, selectedBrand } = useSelector((state) => state.device)

  useEffect(() => {
    dispatch(fetchTypes())
    dispatch(fetchBrands())
    dispatch(fetchDevices({
      typeId: null, 
      brandId: null, 
      page: 1, 
      limit: 2}))
  }, [])

  useEffect(() => {
    dispatch(fetchDevices({
      typeId: selectedType.id, 
      brandId: selectedBrand.id, 
      page: page, 
      limit: 3}))
  }, [page, selectedType, selectedBrand])



  return (
    <Container>
      <Row className='mt-3'>
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
          <Pages />
        </Col>
      </Row>
    </Container>
  )
}

export default Shop