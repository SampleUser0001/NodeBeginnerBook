var querystring = require("querystring"),
    fs = require("fs"),
    formidable = require("formidable");
    
const imageFilepath = "/app/tmp/test.png";

function start(response) {
    console.log("Request handler 'start' was called.");

    let body = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" content="type/html; charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action="/upload" enctype="multipart/form-data" method="post">' +
        '<textarea name="text" row="20" cols="60"></textarea><br>' +
        '<input type="submit" value="Upload file" />' +
        '</form>' +
        '</body>' +
        '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();

}

function upload(response, request) {
    console.log("Request handler 'upload' was called.");

    let form = new formidable.IncomingForm();
    console.log("about to parse");
    form.parse(request, function(error, fields, files) {
        console.log("parsing done");
        /* Possible error on Windows systems:
            tried to rename to an already existing file */
        fs.rename(file.upload.path, imageFilepath, function(err) {
            if(err){
                fs.unlink(imageFilepath);
                fs.rename(file.upload.path, imageFilepath);
            }
        });
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("received image:<br/>");
        response.write("<img src='/show' />");
        response.end();
    });
}

function show(response, postData) {
    console.log("Request handler 'show' was called.");
    fs.readFile(imageFilepath, "binary", function(error, file) {
        if(error) {
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.write(error + "\n");
        } else {
            response.writeHead(200, {"Content-Type": "image/png"});
            response.write(file, "binary");
        }
        response.end();
    });
}

exports.start = start;
exports.upload = upload;
exports.show = show;