const { executeScript } = require('../services/child-process');

exports.handleCodeCompile = (req, res) => {
  try {
    const input = new Uint8Array(Buffer.from(req.body.code));
    let fileName = '';
    if (req.body.scriptType === 'node') {
      fileName = 'INPUT-' + (new Date().getTime().toString()) + '.js';
    }
    const response = executeScript(fileName, req.body.scriptType, input);
    response.then(
      (result) => { 
        res.status(200).json({ success: true, output: result.stdout }); 
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
