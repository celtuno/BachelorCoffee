
module.exports = async function (context, req) {
    //const bodyParser = require("body-parser");
    //bodyParser.urlencoded({ limit: '50mb',extended: false });
    //bodyParser.json({limit: '50mb'});
    var test = "old";
    context.log('JavaScript HTTP trigger function processed a request.');
    //var data = new Buffer.from(req.body.image, 'base64');
    
    if(req.rawBody){
        test = "image";
    }
    
    const newParam = decodeURIComponent(req.rawBody);
    
    const name = (req.query.data || (req.body && req.body.name));
    const responseMessage = name
        ? "Your image is " + name + " - Shit that was long  "
        //? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";
    /*if(name === "testing"){
        test = "Shit it worked!!!";
    }*/
    context.res = {
        // status: 200, /* Defaults to 200 */
        //body: "name: " + responseMessage+"\r\n<br>"+ test + "\r\n" + newParam//responseMessage
        body: newParam
    };
    context.log(newParam)
    context.log(responseMessage)
    return {

        httpResponse:{        
            body: "SomeReturnTest"+responseMessage
        },
        queueOutput: "SomeRetrunquee"
        /*
       body: "SomeReturnTest\r\n" + responseMessage
       */
    };
};