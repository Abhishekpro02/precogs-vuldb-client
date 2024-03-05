// utils.js

export const initialsAvatar = (fullName) => {
  const initials = fullName
    .split(" ")
    .map((name) => name[0].toUpperCase())
    .join("");
  return initials;
};

export const randomBackgroundColor = () => {
  const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-pink-500",
    "bg-purple-500",
    // Add more colors as needed
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};
