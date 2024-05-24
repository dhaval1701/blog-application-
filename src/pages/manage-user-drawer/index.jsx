import React from "react";
import { Drawer, List } from "antd";
import UserListItem from "./lib";

const UserListDrawer = ({ isVisible, onClose }) => {
  // Dummy user data
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      logo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
      role: "admin",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      logo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      role: "user",
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice@example.com",
      logo: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
      role: "moderator",
    },
    {
      id: 4,
      name: "Bob Brown",
      email: "bob@example.com",
      logo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
      role: "user",
    },
  ];

  const handleEdit = (id) => {
    console.log(id);
  };
  return (
    <Drawer
      title="User List"
      placement="right"
      onClose={onClose}
      open={isVisible}
      width={400}
    >
      <div className=" border rounded-md">
        {" "}
        <List
          dataSource={users}
          renderItem={(user) => (
            <UserListItem
              key={user.id}
              user={user}
              onEdit={handleEdit}
              onDelete={() => handleDelete(user.id)}
            />
          )}
        />
      </div>
    </Drawer>
  );
};

export default UserListDrawer;
