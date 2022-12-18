import React, {useEffect, useState } from 'react'
import Modal from "react-bootstrap/Modal"
import { Button, Dropdown, Form, Row, Col } from "react-bootstrap"
import { useSelector, useDispatch} from 'react-redux'
import { setSelectedType, setSelectedBrand } from '../../store/slices/deviceSlice'
import { createDevice } from '../../store/action/DeviceAction'

const CreateDevice = ({show, onHide}) => {
  const dispatch = useDispatch()
  const { 
    types, 
    brands, 
    selectedBrand, 
    selectedType  
  } = useSelector((state) => state.device)


    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', selectedBrand.id)
        formData.append('typeId', selectedType.id)
        formData.append('info', JSON.stringify(info))
        dispatch(createDevice(formData))
        .then(() => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Device
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle className="w-100">{selectedType.name ||'Select type'}</Dropdown.Toggle>
                        <Dropdown.Menu className='w-100'>
                          {types.map(type =>
                            <Dropdown.Item
                              onClick={() => dispatch(setSelectedType(type))}
                              key={type.id}
                            >
                                {type.name}
                            </Dropdown.Item>
                          )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle className="w-100">{selectedBrand.name || 'Select type'}</Dropdown.Toggle>
                        <Dropdown.Menu className='w-100'>
                          {brands.map(brand =>
                            <Dropdown.Item
                              onClick={() => dispatch(setSelectedBrand(brand))}
                              key={brand.id}
                            >
                                {brand.name}
                            </Dropdown.Item>
                          )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder='Insert device name'
                    />
                    <Form.Control
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        className="mt-3"
                        placeholder='Insert the cost of the device'
                        type="number"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                    <hr/>
                    <Button
                        variant={"outline-dark"}
                        onClick={addInfo}
                    >
                        Add new property
                    </Button>
                    {info.map(i =>
                        <Row className="mt-4" key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                    placeholder='Insert property name'
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    value={i.description}
                                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                    placeholder='Insert property description'
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    onClick={() => removeInfo(i.number)}
                                    variant={"outline-danger"}
                                >
                                    Delete
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
                <Button variant="outline-success" onClick={addDevice}>Add</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateDevice;
