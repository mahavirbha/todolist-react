import React, {useEffect, useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";

const EditTask = ({toggle,modal, updateTask,taskObj}) => {

    const [taskName,setTaskName] = useState('');
    const [description,setDescription] = useState('');

    const handleChange = (e) =>{
        const {name, value} = e.target
        if(name === "taskName"){
            setTaskName(value);
        }else{
            setDescription(value);
        }
    }

    useEffect(() => {
        setTaskName(taskObj.Name);
        setDescription(taskObj.Description);
    },[]);

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {};
        tempObj['Name'] = taskName;
        tempObj['Description'] = description;
        updateTask(tempObj);
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>
                Edit Task
            </ModalHeader>
            <ModalBody>
                <form>
                    <div className="form-group">
                        <label>Task Name</label>
                        <input name="taskName" type='text' className="form-control" value={taskName} onChange={handleChange} />
                    </div>
                    <br/>
                    <div  className="form-group">
                        <label>Description</label>
                        <textarea name="description" rows="5" className="form-control" value={description} onChange={handleChange}></textarea>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleUpdate}>  Update </Button>
                {' '}
                <Button onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};

export default EditTask;