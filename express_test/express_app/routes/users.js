var express = require('express');
var router = express.Router();
/*
const snap = document.getElementById("snap");
const canvas = document.getElementById('canvas');
const video = document.getElementById('video');
const errorMsgElement = document.querySelector('span#errorMsg');
//var video = document.querySelector("#videoElement");
const Http = new XMLHttpRequest();

const constraints = {
    audio: false,
    video: {
        width: 640, height: 480
    }
};
async function init(){
    try{
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        handleSuccsess(stream);
    }   catch(e){
        errorMsgElement.innerHTML ="navigator.getUserMedia error:"+ e.toString();
    }
}

function sendPic(d){
    var msg = `base64image=${encodeURIComponent(d)}`;
    Http.open('POST','/',true);
    Http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    Http.send(msg);
}

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
}    


//Success
function handleSuccsess(stream){
    window.stream = stream;
    video.srcObject = stream;
}

//load init
init();

// Draw Image
var context = canvas.getContext('2d');
snap.addEventListener("click", param => {
    context.drawImage(video, 0, 0, 640, 480);
    var d = canvas.toDataURL("image/png");
    sendPic(d);
    });
          }
*/
          /* GET users listing. */
          /*
router.get('/', function(req, res, next) {
  let name1 = req.query.name;
    res.render('users', { 
    title: 'Express',
    name: name1})
  
  //res.send('respond with a resource');
});*/

router.post('/users', function (req, res) {
    console.log(req.body.title);
    console.log(req.body.description);
    res.send('Post page:  ');
});
module.exports = router;
