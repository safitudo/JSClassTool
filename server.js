var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({port: 8080});

var students = [];

var studentsData = {};
var teacher = {};

function updateTeacher(data){
  for (var i in teacher){
    if (!teacher[i])
      continue;
    teacher[i].send(JSON.stringify({type: "update", data: data}));
  }
}

function updateStudent(name, type, data){
  for (var i in students){
    if (!students[i])
      continue;
    if (students[i].name == name){
      students[i].send(JSON.stringify({
        type: type,
        data: data
      }))
      return;
    }
  }
}

wss.on('connection', function(ws) {
    // console.log(ws);
    ws.key  = ws.upgradeReq.headers['sec-websocket-key'];

    ws.on('close', function(message) {
      if (ws.name){
        studentsData[ws.name] = {data: "disconnected", state: 0};
        var st = {};
        st[ws.name] = {data: "disconnected", state: 0};
        updateTeacher(st);
      }

      if (students[ws.key]){
        students[ws.key] = 0;
      }

      if (teacher[ws.key]){
        teacher[ws.key] = 0;
      }

    });

    ws.on('message', function(message) {
        console.log(message);
        message = JSON.parse(message)

        if ( message.type == "teacher" ){
          if (!teacher[ws.key]){
           teacher[ws.key] = ws;
           console.log("adding teacher");
           console.log("teachers: ",teacher)
           updateTeacher(studentsData);
          }

          if (message.action == "update"){
            updateStudent(message.student,"update",message.data);
          }

          if (message.action == "correct"){
            updateStudent(message.student,"correct", 1);
          }

          if (message.action == "not-correct"){
            updateStudent(message.student,"not-correct", 1);
          }
          if (message.action == "reset"){
            updateStudent(message.student,"reset", 1);
          }

        }
        if ( message.type == "student" ){
          ws.name = message.name;
          if (!students[ws.key]){
           students[ws.key] = ws;
          }
          studentsData[message.name] = {data: message.data, state: message.state};
          var s ={};
          s[message.name] = {data: message.data, state: message.state};
          updateTeacher(s);
        }
    });
    // ws.send('something');
});