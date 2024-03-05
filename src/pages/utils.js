// utils.js

export const initialsAvatar = (fullName) => {
  const initials = fullName
    .split(" ")
    .map((name) => name[0].toUpperCase())
    .join("");
  return initials;
};

export const fixedPinkBackgroundColor = () => {
  return "bg-pink-500";
};
