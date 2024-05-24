import React, { useState } from "react";
import { Drawer, Checkbox, Button } from "antd";
import { useDrag, useDrop } from "react-dnd";

const CheckboxItem = ({
  item,
  index,
  moveItem,
  handleCheckboxChange,
  checkedItems,
}) => {
  const [{ isDragging }, drag] = useDrag({
    type: "checkbox",
    item: { id: item, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "checkbox",
    hover(item, monitor) {
      if (!dragRef.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = dragRef.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const dragRef = React.useRef(null);
  drag(drop(dragRef));

  console.log(checkedItems);

  return (
    <li ref={dragRef}>
      <Checkbox
        style={{
          padding: "15px",
          fontSize: "15px",
          opacity: isDragging ? 0 : 1,
        }}
        value={item}
        checked={checkedItems?.includes(item)}
        onChange={(e) => handleCheckboxChange(item, e.target.checked)}
      >
        {item}
      </Checkbox>
    </li>
  );
};

export default CheckboxItem;
