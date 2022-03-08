import React, { Component } from "react";
import { Modal, Button } from 'react-bootstrap';

class SimpleModal extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>This is modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>This is modal content</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">CLOSE</Button>
            <Button variant="primary">SAVE</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
}

export default SimpleModal;
