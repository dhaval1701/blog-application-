import React from "react";

const UserListItem = ({ user, onEdit, onDelete }) => {
  const getUserRoleClass = (role) => {
    switch (role) {
      case "admin":
        return "text-indigo-500";
      case "moderator":
        return "text-orange-500";
      default:
        return "text-teal-500";
    }
  };

  // Define a function to determine the background color based on the user's role
  const getUserRoleBackgroundColor = (role) => {
    switch (role) {
      case "admin":
        return "hover:bg-indigo-100";
      case "moderator":
        return "hover:bg-orange-100";
      default:
        return "hover:bg-teal-100";
    }
  };

  return (
    <>
      <div
        className={`flex items-center justify-start  border-gray-300 p-4 transition-transform duration-300 transform hover:border hover:border-dashed hover:bg-gray-50 hover:rounded-md `}
      >
        <div className="flex items-center flex-1  space-x-3 ">
          <div className="shrink-0">
            <img
              src={user.logo}
              alt="User Logo"
              className="h-10 w-10 rounded-md"
            />
          </div>
          <div className="shrink ">
            <p
              className={`text-sm  text-wrap font-semibold cursor-pointer hover:text-indigo-500`}
            >
              {user.name}
            </p>
            <p className="text-xs text-wrap text-gray-500 font-semibold">
              {user.email}
            </p>
          </div>
        </div>

        <div
          className=" flex items-center justify-center h-8 w-8 rounded-full  hover:bg-orange-100 "
          title="Switch User"
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 cursor-pointer text-gray-500 hover:text-gray-600 "
            fill="currentColor"
            viewBox="0 0 24 24"
            // onClick={onSwitch}
          >
            <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path>
          </svg>
        </div>
        <div
          className="flex items-center justify-center h-8 w-8 rounded-full hover:bg-lime-100 "
          title="Edit User"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 cursor-pointer text-gray-500 hover:text-gray-600 "
            viewBox="0 0 24 24"
            fill="currentColor"
            onClick={() => onEdit(user.id)}
          >
            <path d="M6.41421 15.89L16.5563 5.74785L15.1421 4.33363L5 14.4758V15.89H6.41421ZM7.24264 17.89H3V13.6473L14.435 2.21231C14.8256 1.82179 15.4587 1.82179 15.8492 2.21231L18.6777 5.04074C19.0682 5.43126 19.0682 6.06443 18.6777 6.45495L7.24264 17.89ZM3 19.89H21V21.89H3V19.89Z"></path>
          </svg>
        </div>
        <div
          className=" flex items-center justify-center h-8 w-8 rounded-full  hover:bg-rose-100 "
          title="Delete User"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 cursor-pointer text-gray-500 hover:text-gray-600 "
            fill="currentColor"
            viewBox="0 0 24 24"
            onClick={onDelete}
          >
            <path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"></path>
          </svg>
        </div>

        {/* <button className="flex items-center justify-center h-8 px-3 border bg-indigo-A200 text-slate-100 rounded border-blue-100 hover:text-blue-600 hover:bg-slate-100">
          Switch
        </button> */}
      </div>
    </>
  );
};

export default UserListItem;
