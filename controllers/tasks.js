const getAllTasks = (req, res) => {
  res.send("all the files from tasks");
};
const getTask = (req, res) => {
  res.json({"id":req.params.id});
};
const deleteTask = (req, res) => {
  res.send("delete Task");
};
const updateTask = (req, res) => {
  res.send("Update Task");
};
const createTask = (req, res) => {
  res.json(req.body);
};
module.exports = {
  getAllTasks,getTask,deleteTask,updateTask,createTask
};
