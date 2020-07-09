const express = require('express');
const path = require('path');
const {execFile} = require('child_process');
const cors = require('cors');

const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//ping the api to make sure it's running
app.get('/ping', (req, res) => {
 return res.send('pong');
});

//serve the react app through proxy
app.get('/', (req, res) =>{
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(process.env.PORT || 8080);


//open an executable file
const openFile = (fullFileName) => {
  
  let promise = new Promise((resolve, reject) => {
    execFile(fullFileName);
  });
  return promise;
}
app.post("/exec", (req, res) =>{
  const fullFileName = req.body.filePath + req.body.fileName;
  
  return openFile(fullFileName)
    .then((data)=>{
      return res.status(200).send(data);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json(err);
    });
});