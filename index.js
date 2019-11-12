const core = require('@actions/core')

async function run() {
  try {
    const release = core.getInput('release')
    if (!release) {
      core.setFailed('no release received')
    }
    console.log(`Received ${release}`)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
