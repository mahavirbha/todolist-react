import React, {useState} from 'react';
import EditTask from "../modals/editTask";

const Card = ({taskObj,index, deleteTask, updateListArray}) => {
    const  [modal,setModal] = useState();

    const  colors = [
        {
          primaryColor: "#9e0606",
          secondaryColor: "#fa6666"
        },
        {
            primaryColor: "#fbff00",
            secondaryColor: "rgba(246,244,113,0.92)"
        },
        {
            primaryColor : "#0069ff",
            secondaryColor : "#a6ceff"
        },
        {
            primaryColor: "#ffa600",
            secondaryColor: "#fcd377"
        },
        {
            primaryColor: "#761616",
            secondaryColor: "#6f5b5b"
        },
        {
            primaryColor: "#480a71",
            secondaryColor: "#8b7ac7"
        },
        {
            primaryColor: "#278e1a",
            secondaryColor: "#7eb354"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index);
    }

    const handleDelete = () => {
        deleteTask(index);
    }

    return (
        <div className="card-wrapper mr-5">
            <div className="card-top" style={{"background-color": colors[index%7].primaryColor}}></div>
            <div className="task-holder">
                <span className="card-header" style={{"background-color": colors[index%7].secondaryColor, "border-radius":"10px"}}>{taskObj.Name}</span>
                <div className="objCss mt-2">{taskObj.Description}</div>

                <div style={{"position":"absolute", "right":"10px", "bottom":"0px"}}>
                    <i className="far fa-edit m-3 btnIn" style={{"color": colors[index%7].primaryColor, "cursor": "pointer"}} onClick={() => setModal(true)}></i>
                    <i className="fas fa-trash-alt btnIn" style={{"color": colors[index%7].primaryColor, "cursor": "pointer"}} onClick={handleDelete}></i>
                </div>
            </div>
            <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj = {taskObj} />
        </div>
    );
};

export default Card;