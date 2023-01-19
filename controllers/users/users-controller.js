import people from "./users.js";
let users = people;

const UserController = (app) => {
  app.get("/api/users", findUsers);
  app.get("/api/users/:uid", findUserById);
  app.post("/api/users", createUser);
};

const findUsers = (req, res) => {
  const username = req.query.username;
  if (username) {
    const usersOfUsername = users.filter((u) => u.username === username);
    res.json(usersOfUsername);
    return;
  }

  res.json(users);
};

const findUserById = (req, res) => {
  const userId = req.params.uid;
  const user = users.find((u) => u._id === userId);
  res.json(user);
};

const createUser = (req, res) => {
  const newUser = req.body;
  newUser._id = new Date().getTime() + "";
  users.push(newUser);
  res.json(newUser);
};

export default UserController;
