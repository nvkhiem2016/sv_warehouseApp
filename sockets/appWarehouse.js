var app = require('express');
var router = app.Router();
var userHandler = require('./../handler/userHandler');
module.exports = function(io) {
    io.on('connection', function(socket) {
        console.log('app-warehouse : ',socket.id);
        socket.on('App-Login',  (data)=>{
            console.log("App-Login");
            console.log(socket.id );
            console.log(data);
            socket.broadcast.emit('Server-App-Login',data);
        });
        socket.on("Game-Send-Result-Login",(data)=>{
            console.log("Game-Send-Result-Login");
            console.log(socket.id );
            console.log(data);
            socket.broadcast.emit('Server-Game-Send-Result-Login',data);
        });
        socket.on("App-SetTime",data=>{
            console.log("App-SetTime");
            console.log(socket.id );
            console.log(data);
            socket.broadcast.emit('Server-App-SetTime',data);
        });
        //value input change
        socket.on("App-IdInputChange",data=>{
            console.log("App-IdInputChange");
            console.log(socket.id );
            console.log(data);
            socket.broadcast.emit('Server-App-IdInputChange',data);
        });
        socket.on("App-PassInputChange",data=>{
            console.log("App-PassInputChange");
            console.log(socket.id );
            console.log(data);
            socket.broadcast.emit('Server-App-PassInputChange',data);
        });
        socket.on("App-ChangePassword",data=>{
            console.log("App-ChangePassword");
            console.log(socket.id );
            console.log(data);
            socket.broadcast.emit('Server-App-ChangePassword',data);
        });
    });

    return router;
}
