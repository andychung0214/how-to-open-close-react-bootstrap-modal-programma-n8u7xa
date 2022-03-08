import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function UsingHook() {
  const [modalShow, setShow] = useState(false);
  const [detailIndex, setDetailIndex] = useState(1);

  function clickShow() {
    console.log('detailIndex = ', detailIndex);
    setShow(true);
  }

  return (
    <div>
      <table>
        <thead>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
        </thead>
        <tbody>
          <td>content1</td>
          <td>content2</td>
          <td>content3</td>
          <td>
            <Button
              className="btn btn-success"
              onClick={() => {
                setDetailIndex(78);
                clickShow(78);
              }}
            >
              Show modal
            </Button>
          </td>
        </tbody>
      </table>
      <Modal
        size="sm"
        show={modalShow}
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            This is modal title
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{detailIndex}</Modal.Body>
      </Modal>
    </div>
  );
}
