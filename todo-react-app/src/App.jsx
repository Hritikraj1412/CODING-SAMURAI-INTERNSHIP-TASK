import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;

    setTasks([...tasks, { text: input, completed: false }]);
    setInput("");
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    const newTask = prompt("Edit Task:", tasks[index].text);
    if (newTask && newTask.trim() !== "") {
      const updatedTasks = [...tasks];
      updatedTasks[index].text = newTask;
      setTasks(updatedTasks);
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={styles.container}>
      <h1>📝 To-Do List</h1>

      <div>
        <input
          style={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task"
        />
        <button style={styles.addBtn} onClick={addTask}>
          Add
        </button>
      </div>

      <ul style={styles.list}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              ...styles.item,
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            <span onClick={() => toggleTask(index)}>{task.text}</span>
            <div>
              <button onClick={() => editTask(index)}>Edit</button>
              <button onClick={() => deleteTask(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    background: "#fff",
    padding: "20px",
    width: "320px",
    borderRadius: "8px",
  },
  input: {
    padding: "6px",
    width: "70%",
  },
  addBtn: {
    padding: "6px",
    marginLeft: "5px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    marginTop: "20px",
  },
  item: {
    background: "#eee",
    marginBottom: "8px",
    padding: "6px",
    display: "flex",
    justifyContent: "space-between",
  },
};

export default App;
