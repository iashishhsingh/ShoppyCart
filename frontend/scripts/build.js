process.env.DISABLE_ESLINT_PLUGIN = "true";
process.chdir(`${__dirname}/..`);

require("react-scripts/scripts/build");
