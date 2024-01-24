// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 
function logMsg() {
        console.log(this.errMsg);
}

const object1 = {
    errMsg:"Something went wrong!"
}

const object2 = {
    errMsg:"Something went wrong! -- 2"
}

logMsg.call(object1)
logMsg.call(object2)