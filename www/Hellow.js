var exec = require('cordova/exec');

// module.exports.coolMethod = function (arg0, success, error) {
//     exec(success, error, 'Hellow', 'coolMethod', [arg0]);
// };

module.exports.add = function (arg0,success, error)
{
    exec(success, error, 'Hellow', 'add', [arg0]);
    
}
module.exports.substract = function (arg0,success, error)
{
    exec(success, error, 'Hellow', 'substract', [arg0]);
}