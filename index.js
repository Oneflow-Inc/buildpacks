const core = require('@actions/core');
const wait = require('./wait');
const conda = require('./src/conda');

// most @actions toolkit packages have async methods
async function run() {

    const action = core.getInput('action');
    console.log(process.env)
    try {
        if (action == "conda") {
            await conda.run()
        } else {
            const ms = core.getInput('milliseconds');
            core.info(`Waiting ${ms} milliseconds ...`);

            core.debug((new Date()).toTimeString()); // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true
            await wait(parseInt(ms));
            core.info((new Date()).toTimeString());

            core.setOutput('time', new Date().toTimeString());
        }
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();