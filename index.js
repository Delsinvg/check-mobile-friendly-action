const core = require("@actions/core");
const github = require("@actions/github");
const axios = require("axios").default;

try {
    const siteUrl = core.getInput("site");
    const apiKey = core.getInput("key");
    const apiUrl = 'https://searchconsole.googleapis.com/v1/urlTestingTools/mobileFriendlyTest:run?key=' + apiKey;

    axios.post(apiUrl, {
        url: siteUrl,
        requestScreenshot: true
      })
      .then(function (response) {
        console.log(response.data);
        core.setOutput("response", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {
    core.setFailed(error.message);
  }