const { spawn }  = require('child_process');
const fs = require('fs').promises;
const { FILE_BASE_URL } = require('../utility/globals');

exports.executeScript = async (inputFileName, scriptType, content) => {
  await fs.open(`${FILE_BASE_URL}/${inputFileName}`, 'w');
  const output = {
    stderr: '',
    stdout: ''
  };
  if (scriptType === 'node') {
    await fs.writeFile(`${FILE_BASE_URL}/${inputFileName}`, content, 'utf-8');

    const subProcess = spawn(scriptType, [FILE_BASE_URL + '/' + inputFileName]);
    for await (const data of subProcess.stdout) {
      output.stdout += data;
    }
    for await (const data of subProcess.stderr) {
      output.stderr += data;
    }
    const exitCode = await new Promise((resolve, reject) => {
      subProcess.on('close', resolve);
    });
    
    if (exitCode) {
      throw new Error(output.stderr);
    }
    await fs.unlink(`${FILE_BASE_URL}/${inputFileName}`);
  }
  return output;
};