import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { setSelectedBrand } from '../store/slices/deviceSlice'
import DeviceItem from './DeviceItem'

const DeviceList = () => {
  const dispatch = useDispatch()
  const { devices } = useSelector((state) => state.device)

  return (
    <div className='d-flex flex-wrap'>
      {devices.map(device => {
        return  <DeviceItem key={device.id} device={device} />
      })}
    </div>
  )
}

export default DeviceList