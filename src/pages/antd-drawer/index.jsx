import React, { useState, useEffect } from "react";
import { Drawer, Checkbox, Button } from "antd";
import { useDrag, useDrop } from "react-dnd";
import CheckboxItem from "./lib";

const CheckboxDrawer = ({ isVisible, onClose, dataList, setDataList }) => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [tempCheckedItems, setTempCheckedItems] = useState([]);

  useEffect(() => {
    if (!isVisible) {
      setTempCheckedItems([...checkedItems]);
    }
  }, [isVisible]);

  const handleCheckboxChange = (value, checked) => {
    if (checked) {
      setTempCheckedItems([...tempCheckedItems, value]);
    } else {
      setTempCheckedItems(tempCheckedItems.filter((item) => item !== value));
    }
  };

  const handleApply = () => {
    setCheckedItems(tempCheckedItems);
    onClose(tempCheckedItems);
  };

  const moveItem = (dragIndex, hoverIndex) => {
    const draggedItem = dataList[dragIndex];
    const updatedList = [...dataList];
    updatedList.splice(dragIndex, 1);
    updatedList.splice(hoverIndex, 0, draggedItem);
    setDataList(updatedList);
  };

  return (
    <Drawer
      title="Configuration"
      placement="right"
      closable={false}
      width={300}
      onClose={onClose}
      open={isVisible}
      footer={
        <div
          style={{
            textAlign: "right",
          }}
        >
          <Button onClick={onClose} style={{ marginRight: 8 }}>
            Close
          </Button>
          <Button onClick={handleApply} type="primary">
            Apply
          </Button>
        </div>
      }
    >
      <ul style={{ marginTop: "40px", padding: 0 }}>
        {dataList.map((item, index) => (
          <CheckboxItem
            key={item}
            item={item}
            index={index}
            moveItem={moveItem}
            handleCheckboxChange={handleCheckboxChange}
            checkedItems={tempCheckedItems}
          />
        ))}
      </ul>
    </Drawer>
  );
};

export default CheckboxDrawer;
