import React, { useState } from "react";

// Style
import "../4/index.scss";
import "./index.scss";
import Search from "../5";

// Components
/*
 * Create the components you need in the components folder.
 * You may find inspiration in task 4
 */

interface ToDo {
  text: string;
  isDone: boolean;
  id: number | string;
}

const Task6: React.FunctionComponent = () => {
  const [toDos, setToDos] = useState<ToDo[]>([]);
  const [toDo, setToDo] = useState("");

  const markToDoAsDone = (toDoId: number | string) => {
    setToDos((oldState) => {
      const newState = [...oldState];
      const toDo = newState.find((toDo) => toDo.id === toDoId);
      if (toDo) {
        toDo.isDone = true;
      }
      return newState;
    })
  };

  const deleteToDo = (toDoId: string | number) => {
    setToDos((oldState) => ([...oldState.filter((toDo) => toDo.id !== toDoId)]))
  };

  return (
    <div id="task-6">
      <div className="add-to-do">
        <div className="form-group">
          <label>To Do</label>
          <input
            name="password"
            onChange={(event) => setToDo(event.target.value)}
            placeholder="Add to do"
          />
        </div>
        <button disabled={!toDo} onClick={() => setToDos((oldState) => [...oldState, { text: toDo, isDone: false, id: Date.now()}])}>Add</button>
      </div>
      <Search dataToSearchIn={toDos} deleteListItem={deleteToDo} />
      <div className="to-dos-container">
        <div className="pending-to-dos">
          <h3>Pending ToDos</h3>
          {
            toDos.find((toDo) => !toDo.isDone)
              ? toDos.map((toDo) => !toDo.isDone ? (
                <div className="to-do" key={toDo.id}>
                  <div>
                    {toDo.text}
                  </div>
                  <button onClick={() => markToDoAsDone(toDo.id)} style={{ margin: 0 }}>Mark as done</button>
                </div>
               ) : null)
              : "Add some ToDos"
          }
        </div>
        <div className="done-to-dos">
          <h3>Done ToDos</h3>
          {
            toDos.find((toDo) => toDo.isDone)
              ? toDos.map((toDo) => toDo.isDone ? <div  key={toDo.id} className="to-do"><div>{toDo.text}</div></div> : null)
              : "Mark some ToDos as done"
          }
        </div>
      </div>
    </div>
  );
};

export default Task6;
