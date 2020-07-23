
exports.editorApiBaseUrl = function () {
  const baseUrl = process.env.EDITOR_API_BASE_URL || 'http://localhost:5000';
  return baseUrl;
};

exports.editorWwwBaseUrl = function () {
  const baseUrl = process.env.EDITOR_WWWW_BASE_URL || 'http://localhost:3000';
  return baseUrl;
}
const FILE_BASE_URL = "/home/rails/temp-files";

exports.FILE_BASE_URL = FILE_BASE_URL;
