exports.post = function(request, response) {
    // Use "request.service" to access features of your mobile service, e.g.:
    //   var tables = request.service.tables;
    var push = request.service.push;

    var body = JSON.parse(JSON.stringify(eval("(" + request.body + ")")));

    var payload = '{ "message" : "New item added: ' + body.message + '" }';
    var target = body.target ? body.target : null;

   // Write the default response and send a notification
   // to all platforms.
    push.send(target, payload, {
       success: function(pushResponse){
           // Send the default response.
           response.send(statusCodes.OK, { message : 'OK!' });
       },
       error: function (pushResponse) {
            // Send the an error response.
           response.send(statusCodes.OK, { message : 'Error!' });
       }
    });
};