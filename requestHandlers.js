function start() {
    console.log("Request handler for 'start' was called.");
    return "Hello Start";
}

function upload() {
    console.log("Request handler for 'upload' was called.");
    return "Hello Upload";
}

exports.start = start;
exports.upload = upload;
