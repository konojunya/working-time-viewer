const fs = require("fs");
const webpackManifest = require("../dist/webpack-manifest.json");

const manifest = {
  manifest_version: 2,
  name: "working-time-viewer",
  version: "0.0.0",
  offline_enabled: true,
  description: "Calculation working time",
  permissions: ["activeTab", "https://github.com/"],
  page_action: {
    default_popup: "index.html"
  },
  background: {
    scripts: [webpackManifest["background.js"]],
    persistent: false
  },
  content_scripts: [
    {
      matches: ["https://github.com/*/*/projects/*"],
      js: [webpackManifest["content_script.js"]],
      run_at: "document_idle",
      all_frames: false
    }
  ]
};

fs.writeFile("dist/manifest.json", JSON.stringify(manifest), err => {
  if (err) {
    console.error(err);
  }
});
