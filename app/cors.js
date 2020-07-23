const globals = require('../utility/globals');

exports.configure = function (req, res, next) {
  const url = globals.editorWwwBaseUrl();
  res.header('Access-Control-Allow-Origin', url);
  res.header('Access-Control-Allow-Credentials', 'true');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Max-Age', 60 * 60 * 24);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Accept,Content-Type,Content-Length');
    res.status(200).send('ok');
  } else {
    res.header('Cache-Control', 'no-cache,no-store,must-revalidate');
    res.header('Pragma', 'no-cache');
    res.header('Expires', 0);
    next();
  }
};