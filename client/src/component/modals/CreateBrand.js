import React, { useState } from 'react'
import Modal from "react-bootstrap/Modal"
import { Button, Form } from "react-bootstrap"
import { createBrand } from '../../store/action/DeviceAction'
import { useDispatch } from 'react-redux'

const CreateBrand = ({show, onHide}) => {
    const [value, setValue] = useState('')
    
    const dispatch = useDispatch()

    const addBrand = (e) => {
      e.preventDefault()
      dispatch(createBrand({name: value}))
      .unwrap()
      .then(() => {
        setValue('')
        onHide()
      })
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add brand
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={'Insert brand name'}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
                <Button variant="outline-success" onClick={addBrand}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;
