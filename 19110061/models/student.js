var mygroup = [
  {
    id: 19110061,
    name: "Nguyen Khai Tri",
  },
];

function GetGroup() {
  return mygroup;
}

function AddToGroup(item) {
  mygroup.push(item);
}

function FindStudentById(id) {
  user = mygroup.find((key) => key.id == id);
  return user;
}

module.exports = {
  GetGroup,
  AddToGroup,
  FindStudentById,
};
