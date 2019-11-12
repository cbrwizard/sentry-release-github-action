const core = require('@actions/core')
const createSentryRelease = require('./src/sentry')

async function run() {
  try {
    const release = core.getInput('release')
    if (!release) {
      core.setFailed('no release received')
    }

    const sentryRelease = await createSentryRelease(
      release,
      core.getInput('sentry_repo')
    )
    if (!sentryRelease) {
      core.setFailed('Sentry release creation failed')
    }
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
