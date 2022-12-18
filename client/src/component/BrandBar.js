import React from 'react'
import { Card } from 'react-bootstrap'
import { useSelector, useDispatch} from 'react-redux'
import { setSelectedBrand } from '../store/slices/deviceSlice'

const BrandBar = () => {
  const dispatch = useDispatch()
  const { brands, selectedBrand } = useSelector((state) => state.device)

  return (
    <div className='d-flex flex-wrap'>
      {brands.map(brand => {
        return  <Card
                  key={brand.id}
                  style={{cursor: 'pointer'}}
                  border={brand.id === selectedBrand.id ? 'orange' : 'light'}
                  onClick={() => dispatch(setSelectedBrand(brand))}
                >
                  <Card.Body>
                    {brand.name}
                  </Card.Body>
                </Card>
      })}
    </div>
  )
}

export default BrandBar