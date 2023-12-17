exports.config = {
  runner: "local",
  port: 4723,
  host: "localhost",
  path: "/wd/hub",
  loglevel: "info",
  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    require: ["@babel/register"],
    timeout: 600000,
  },
  maxInstances: 1,
  sync: true,
  specs: ["./test/specs/home.e2e.js"],

  desiredCapabilities: [
    {
      platformName: "Android",
      automationName: "UIAutomator2",
      udid: "ZY223RWTPT",
      browserName: "chrome",
      deviceName: "Pixel",
    },
  ],
};
