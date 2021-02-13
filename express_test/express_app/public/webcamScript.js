window.addEventListener("DOMContentLoaded", function() {
    
    
    
    const snap = document.getElementById("snap");
    const canvas = document.getElementById('canvas');
    const video = document.getElementById('video');
    const errorMsgElement = document.querySelector('span#errorMsg');
    //const returnPic = document.getElementById('returnPic');  
    //var video = document.querySelector("#videoElement");

    const Http = new XMLHttpRequest();
    
    const constraints = {
        audio: false,
        video: {
            width: 320, height: 240
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
        var newMsg = 'name=testing';
        var msg = `${encodeURIComponent(d)}`;
        
        //Http.open('POST','/',true);
        //Http.open('POST','http://localhost:7071/api/HttpTrigger_test/'+d,true);
        Http.open('POST','https://coffeetestfunction.azurewebsites.net/api/HttpTrigger_test',true);        
        Http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        Http.send(msg);        

    }
    Http.onreadystatechange = (e) => {
        console.log('Response:')
      console.log(Http.responseText)
      document.getElementById('returnMsg').innerHTML = Http.responseText;
      var encoded = Http.responseText;
      Base64ToImage(encoded,function(img){
      //var tmpImg = new Image();
      //tmpImg.src = encoded;
      //var context = returnPic.getContext('2d');
      //var base64Data = encoded.replace(/^data:image\/png;base64,/, "");
      //context.drawImage(tmpImg, 0, 0, 640, 480); 
            
            document.getElementById('returnPicNew').appendChild(img);

      });
    }    
    function Base64ToImage(base64img, callback) {
        var img = new Image();
        //document.getElementById('returnPicNew').removeChild(img);
        img.onload = function() {

            callback(img);
        };
        img.src = base64img;
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
        context.drawImage(video, 0, 0, 320, 240);
        var d = canvas.toDataURL("image/png");
        sendPic(d);
        });
});
        