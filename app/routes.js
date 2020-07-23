exports.declare = (app) => {
  // routes for code compilation.
  const codeCompileRoute = require('../routes/codeCompilation');
  app.post('/api/code-compile', codeCompileRoute.handleCodeCompile);

  // routes for code submission.
  const codeSubmitRoute = require('../routes/codeSubmission');
  app.post('/api/code-submit', codeSubmitRoute.handleCodeSubmit);
};