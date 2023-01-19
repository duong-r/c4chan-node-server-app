import posts from "./messages.js";
let messages = posts;

const createMessage = (req, res) => {
    const newMessage = req.body;
    newMessage._id = (new Date()).getTime()+'';
    messages.push(newMessage);
    res.json(newMessage);
}

const findMessages  = (req, res) => res.json(messages);


  

export default (app) => {
    app.post('/api/messages', createMessage);
    app.get('/api/messages', findMessages);
   }
   