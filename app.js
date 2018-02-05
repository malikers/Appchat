const express = require('express');
const app = express();
const io = require('socket.io')();

app.use(express.static('public'));


//set up routes
app.use(require('./routes/index'));

app.use(require('./routes/index'));
app.use(require('./routes/contact'));
app.use(require('./routes/user'));


const server = app.listen(3000, () => {
  console.log('app running on port 3000!');
});

io.attach(server);

io.on('connection', (socket)=> {
   console.log('a user has connected!');
   io.emit('chat message', { for : 'everyone', message : `${socket.id} is here!`});

socket.on('chat message', msg => {
  io.emit('chat message,' { for: 'everyone', msg})
});

   io.emit('connectMsg', { for: 'everyone', msg : `${socket.id} is here!}`});

socket.on('disconnect', (socket) => {
  console.log('a user has disconnect!');

  io.emit('disconnect message', `${socket.id} has left the building!`);
  });

});
