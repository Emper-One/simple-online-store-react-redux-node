import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { ListGroup } from 'react-bootstrap'
import { setSelectedType  } from '../store/slices/deviceSlice'


const TypeBar = () => {
  const dispatch = useDispatch()
  const { types, selectedType } = useSelector((state) => state.device)

  return (
    <ListGroup>
      {types.map((type) => {
        return  <ListGroup.Item
                  style={{cursor: 'pointer'}}
                  active={type.id === selectedType.id}
                  onClick={() => dispatch(setSelectedType(type))}
                  key={type.id}
                >
                  {type.name}
                </ListGroup.Item>
      })}  
    </ListGroup>
  )
}

export default TypeBar