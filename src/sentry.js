const SentryCli = require('@sentry/cli')

async function createSentryRelease(release, repo) {
  try {
    if (!release) {
      console.error('no release passed')
      return false
    }
    if (!repo) {
      console.error('no repo passed')
      return false
    }
    console.log({
      org: process.env.SENTRY_ORG,
      project: process.env.SENTRY_PROJECT,
    })
    const cli = new SentryCli()

    console.log(`Creating sentry release ${release}`)
    await cli.releases.new(release)

    console.log('Setting commits for sentry release')
    await cli.releases.setCommits(release, { auto: true, repo })

    console.log('Finalizing release')
    await cli.releases.finalize(release)
    return true
  } catch (e) {
    console.error(e)
  }
}

module.exports = createSentryRelease
