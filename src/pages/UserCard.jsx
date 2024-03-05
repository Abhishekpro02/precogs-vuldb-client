import React from "react";
import { initialsAvatar, randomBackgroundColor } from "./utils"; // Custom utility functions for avatar and background color

const UserCard = ({ user }) => {
  const avatarInitials = initialsAvatar(user.fullName);
  const bgColor = randomBackgroundColor();

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-md overflow-hidden mt-3">
      <div
        className={`w-full h-40 flex items-center justify-center text-white font-bold text-4xl ${bgColor}`}
      >
        {avatarInitials}
      </div>
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{user.fullName}</h2>
        <p className="text-gray-600">{user.email}</p>
        <p className="text-gray-600">Role: {user.role}</p>
      </div>
      <div className="bg-gray-100 p-4 border-t border-gray-200">
        <span className="text-xs text-gray-500">
          Created At: {new Date(user.createdAt).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};

export default UserCard;
