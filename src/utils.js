export const generateLoanId = () => {
  return Math.floor(Math.random() * 100000000);
};

export const getInitials = (name) => {
  const names = name.split(" ");
  const initials = names[0].charAt(0) + names[names.length - 1].charAt(0);
  return initials.toUpperCase();
};

export const formatDate = (dateString) => {
  const options = {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
  };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
};
