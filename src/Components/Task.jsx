import { DndContext, closestCenter } from "@dnd-kit/core";
import { useEffect, useState } from "react";
import { FaRegPlusSquare, FaCalendarAlt, FaHourglassHalf, FaCheckCircle } from "react-icons/fa";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import StoreList from "./StoreList";

const DATA = [
  {
    id: "0e2f0db1-5457-46b0-949e-8032d2f9997a",
    name: "ToDo",
    items: [
      { id: "26fd50b3-3841-496e-8b32-73636f6f4197", name: "3% Milk" },
      { id: "b0ee9d50-d0a6-46f8-96e3-7f3f0f9a2525", name: "Butter" },
    ],
    tint: 1,
  },
  {
    id: "487f68b4-1746-438c-920e-d67b7df46247",
    name: "Ongoing",
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
    name: "Completed",
    items: [
      { id: "960cbbcf-89a0-4d79-aa8e-56abbc15eacc", name: "Workbench" },
      { id: "d3edf796-6449-4931-a777-ff66965a025b", name: "Hammer" },
    ],
    tint: 3,
  },
];



const Task = () => {

  const [stores, setStores] = useState(DATA);
   
  console.log('Stores now', stores);
  
  const handleDragDrop = (results) => {
    const {source,destination, type} = results;
   console.log('result is ',results);
   if(!destination) return;
   if(source.droppableId === destination.droppableId && source.index === destination.index) return;


   if(type === 'group'){
    const reorderedStores = [...stores];
    const sourceIndex = source.index;
    const destinationIndex = destination.index;

    const [removedStore] = reorderedStores.splice(sourceIndex, 1);
    reorderedStores.splice(destinationIndex, 0, removedStore);

    return setStores(reorderedStores);
   }

   console.log('inner source', source, destination);
  

   const storeSourceIndex = stores.findIndex((store) => store.id === source.droppableId);
   const storeDestinationIndex = stores.findIndex((store) => store.id === destination.droppableId);
   const newSourceItems = [...stores[storeSourceIndex].items]
   const newDestinationItems = source.droppableId !== destination.droppableId ? [...stores[storeDestinationIndex].items] : newSourceItems;
   const [deletedItem] = newSourceItems.splice(source.index,1);
   newDestinationItems.splice(destination.index,0,deletedItem);

   const newStores = [...stores]

   newStores[storeSourceIndex] = {
    ...stores[storeSourceIndex],
    items: newSourceItems
   }

   newStores[storeDestinationIndex] = {
    ...stores[storeDestinationIndex],
    items: newDestinationItems
   }

   setStores(newStores);

   console.log('send this to database', newStores);
  }

  const onDragEnd = e => {
    console.log('On Drag End', e);
  }


  return (
    <div>
      <div className="flex justify-center items-center py-5">

        <button className="btn btn-neutral"> <FaRegPlusSquare /> Add Task</button>
      </div>

      

      <div>
        <div className="layout__wrapper">

          <div className="card">
            <DragDropContext onDragEnd={handleDragDrop}>
              <div className="header">
                <h1 className="font-bold text-lg">Task list</h1>
              </div>
              <Droppable droppableId="ROOT" type="group">
                {
                  (provided) => (

                    <div {...provided.droppableProps} ref={provided.innerRef}>

                      {
                        stores.map((store, index) => (
                          <Draggable key={store.id} draggableId={store.id} index={index}>
                            {
                              (provided) => (
                         
                                  <div className="" {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
                                    <StoreList {...store}/>
                                  </div>
                           
                              )
                            }
                          </Draggable>
                        ))
                      }
                      {provided.placeholder}
                    </div>
                    
                  )
                }
              </Droppable>
            </DragDropContext>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;