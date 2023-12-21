import { Draggable, Droppable } from "react-beautiful-dnd";

const StoreList = ({ name, items, id }) => {
  return (
    <Droppable droppableId={id}>
      {
        (provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <div className="store-container">
              <h3 className="font-bold">{name}</h3>
            </div>

            <div className="items-container">
              {items?.map((item, index) => (
                <Draggable draggableId={item.id} index={index} key={index}>
                  {
                    (provided) => (
                      <div  className="item-container" {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
                        <h4>{item.name}</h4>
                      </div>
                    )
                  }
                </Draggable>
              ))}
               {provided.placeholder}
            </div>
          
          </div>
         
        )
      }
    </Droppable>
  );
};

export default StoreList;