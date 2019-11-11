const core = require('@actions/core')

async function run() {
  try {
    const release = core.getInput('release')
    console.log(`Received ${release}`)

    core.debug(`Debug received ${release}`)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
