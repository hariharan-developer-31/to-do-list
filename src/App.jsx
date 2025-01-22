import { useState } from "react";
import "./App.css";

let Info = () => {
  
  let [task, setTask] = useState(""); //Input Value
  let [list, setList] = useState([]); // Adding List

  let add = (i) => {
    setTask(i.target.value);
  };

  let remove = (x) => {
    setList(list.filter((a) => a !== x));
  };
  
  let addToList = () => {
    
    let day = new Date();
    let date = `Date: ${day.toLocaleDateString()}`;
    let time = `Time: ${day.toLocaleTimeString()}`;

    if (task !== "") {
      var newArr = {
        text: task,
        date: date,
        time: time,
      };
      setList([...list, newArr]);
    }
    setTask("");
  };

  return (
    <div className="Overall">
      <div className="Overall-Side">

        {/* Left Side */}
        <div className="leftSide">
          <h1>To-Do-List</h1>
          <textarea
            value={task}
            onChange={add}
            placeholder="Add your task..."
          ></textarea>
          <button onClick={addToList}>Add to the List</button>
        </div>

        {/* Right Side */}
        <div className="rightSide">
          <h1>Recent List</h1>
          <div className="gap">
            {list.map((x) => (
                <div className="taskDetails">
                  <div className="checkMe">
                  <h2>Task</h2> 
                  <p>{x.date} {x.time}</p>
                  </div>
                  <div className="checkBoxer">
                  <li>{x.text}</li>
                  <input className="checkBox" type="checkbox" onClick={() => remove(x)}/>
                  </div> 
                </div>
            ))}
            <h4></h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
