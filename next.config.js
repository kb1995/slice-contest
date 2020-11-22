const withTM = require("next-transpile-modules")(["next-slicezone"]).push({
  distDir: "build",
});
module.exports = withTM();
