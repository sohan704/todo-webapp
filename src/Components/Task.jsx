import { DndContext, closestCenter } from "@dnd-kit/core";
import { useEffect, useState } from "react";
import { FaRegPlusSquare, FaCalendarAlt, FaHourglassHalf, FaCheckCircle } from "react-icons/fa";


const DATA = [
  {
    id: "0e2f0db1-5457-46b0-949e-8032d2f9997a",
    name: "Walmart",
    items: [
      { id: "26fd50b3-3841-496e-8b32-73636f6f4197", name: "3% Milk" },
      { id: "b0ee9d50-d0a6-46f8-96e3-7f3f0f9a2525", name: "Butter" },
    ],
    tint: 1,
  },
  {
    id: "487f68b4-1746-438c-920e-d67b7df46247",
    name: "Indigo",
    items: [
      {
        id: "95ee6a5d-f927-4579-8c15-2b4eb86210ae",
        name: "Designing Data Intensive Applications",
      },
      { id: "5bee94eb-6bde-4411-b438-1c37fa6af364", name: "Atomic Habits" },
    ],
    tint: 2,
  },
  {
    id: "25daffdc-aae0-4d73-bd31-43f73101e7c0",
    name: "Lowes",
    items: [
      { id: "960cbbcf-89a0-4d79-aa8e-56abbc15eacc", name: "Workbench" },
      { id: "d3edf796-6449-4931-a777-ff66965a025b", name: "Hammer" },
    ],
    tint: 3,
  },
];



const Task = () => {
  
  const [stores, setStores] = useState(DATA);

  const [tasks1, setTasks1] = useState([]);
  const [tasks2, setTasks2] = useState([]);
  const [tasks3, setTasks3] = useState([]);


  useEffect(() => {
    const fetchData = async (filePath, setTasks) => {
      try {
        const response = await fetch(filePath);
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error(`Error fetching data from ${filePath}:`, error);
      }
    };

    fetchData('/task1.json', setTasks1);
    fetchData('/task2.json', setTasks2);
    fetchData('/task3.json', setTasks3);
  }, []);

  console.log(tasks1, tasks2, tasks3);

  const onDragEnd = e => {
    console.log('On Drag End', e);
  }


  return (
    <div>
      <div className="flex justify-center items-center py-5">

        <button className="btn btn-neutral"> <FaRegPlusSquare /> Add Task</button>
      </div>

      <div className="flex justify-evenly items-center">
        <div>
          <h1 className="text-xl font-bold flex justify-center gap-1 items-center"> <FaCalendarAlt /> To-Do</h1>
          <ul>
            <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>

              {tasks1.map((task) => (
                <li key={task.id}>{task.title}</li>
              ))}
            </DndContext>

          </ul>
        </div>
        <div>
          <h1 className="text-xl font-bold flex justify-center gap-1 items-center"> <FaHourglassHalf /> Ongoing</h1>
          <ul>
            {tasks2.map((task) => (
              <li key={task.id}>{task.title}</li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-bold flex justify-center gap-1 items-center"> <FaCheckCircle /> Completed</h1>
          <ul>
            {tasks3.map((task) => (
              <li key={task.id}>{task.title}</li>
            ))}
          </ul>
        </div>

      </div>

      <div>
        <div className="layout__wrapper">
          <div className="card">
            <div className="header">
                <h1 className="font-bold text-lg">Shopping list</h1>
            </div>
            <div>
              {
              
              stores.map(store => {(
                <div>

                </div>
              )})
              
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;