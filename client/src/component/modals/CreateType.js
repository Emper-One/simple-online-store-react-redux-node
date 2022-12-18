import React, { useState } from 'react'
import Modal from "react-bootstrap/Modal"
import { Form, Button } from "react-bootstrap"
import { createType } from '../../store/action/DeviceAction'
import { useDispatch } from 'react-redux'

const CreateType = ({show, onHide}) => {
    const [value, setValue] = useState('')

    const dispatch = useDispatch()

    const addType = (e) => {
      e.preventDefault()
      dispatch(createType({name: value}))
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
                Add type
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Control
                  value={value}
                  onChange={e => setValue(e.target.value)}
                  placeholder={'Insert type name'}
                />
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="outline-danger" onClick={onHide}>Close</Button>
              <Button variant="outline-success" onClick={addType}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;
