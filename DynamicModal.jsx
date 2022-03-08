import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class DynamicModal extends Component {
  constructor() {
    super();
    this.state = {
      isModalOpen: false
    };
  }

  hideShowModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  render() {
    return (
      <div>
        <Button variant="primary" onClick={() => this.hideShowModal()}>
          Click to hide/show
        </Button>
        <Modal
          show={this.state.isModalOpen}
          onHide={() => this.hideShowModal()}
        >
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
        </Modal>
      </div>
    );
  }
}

export default DynamicModal;
