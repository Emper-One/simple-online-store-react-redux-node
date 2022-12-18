import React, { useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import CreateBrand from '../component/modals/CreateBrand'
import CreateDevice from '../component/modals/CreateDevice'
import CreateType from '../component/modals/CreateType'

const AdminPanel = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)


  return (
    <Container className="d-flex flex-column">
    <Button
        variant={"outline-dark"}
        className="mt-4 p-2"
        onClick={() => setTypeVisible(true)}
    >
        Add Type
    </Button>
    <Button
        variant={"outline-dark"}
        className="mt-4 p-2"
        onClick={() => setBrandVisible(true)}
    >
        Add Brand
    </Button>
    <Button
        variant={"outline-dark"}
        className="mt-4 p-2"
        onClick={() => setDeviceVisible(true)}
    >
        Add Device
    </Button>
    <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
    <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
    <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
</Container>
  )
}

export default AdminPanel