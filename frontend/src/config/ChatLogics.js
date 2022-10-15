export const getSender = (loggedinUser, users) => {
  return users[0]._id === loggedinUser._id ? users[1].name : users[0].name;
};
