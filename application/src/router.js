function route(handle, pathname){
    console.log("About to route a request for " + pathname);

    if(typeof  handle[pathname] === 'function'){
        handle[pathname]();
    } else {
        console.error("No request handler found for " + pathname);
    }
}

exports.route = route;