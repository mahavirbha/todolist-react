import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";

const CreateTask = ({toggle,modal}) => {
    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>
                Create Task
            </ModalHeader>
            <ModalBody>
                <form>
                    <div className="form-group">
                        <label>Task Name</label>
                        <input type='text' className="form-control"/>
                    </div>
                    <br/>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea rows="5" className="form-control"></textarea>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={toggle}>  Create </Button>
                {' '}
                <Button onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateTask;