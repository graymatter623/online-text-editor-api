const { executeScript } = require('../services/child-process');
const { EXTENSIONS } = require('../utility/enums');
exports.handleCodeCompile = (req, res) => {
  try {
    const input = new Uint8Array(Buffer.from(req.body.code));
    let fileName = '';
    fileName = 'INPUT-' + (new Date().getTime().toString()) + EXTENSIONS[req.body.scriptType];
    const response = executeScript(fileName, req.body.scriptType, input);
      response.then(
        (result) => { 
          res.status(200).json({ success: true, output: result.stdout, scriptType: req.body.scriptType }); 
        }, 
        (err) => { 
          console.log(err.toString());
          res.status(200).json({ success: false, output: err.toString() }); 
        }
      );
  
  } catch (error) {
    console.log(error);
  }
};
