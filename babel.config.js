module.exports = api => {
  const presets = ["@babel/preset-typescript"];
  const plugins = [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-syntax-dynamic-import"
  ];
  if (api.env(name => name.endsWith("_browser"))) {
    presets.unshift([
      "@babel/preset-env",
      {
        modules: false,
        targets: "last 2 Chrome versions"
      }
    ]);

    plugins.push("@babel/plugin-transform-runtime");
  }

  return {
    presets,
    plugins
  };
};
