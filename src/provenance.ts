import type { Subject } from './subject'

const INTOTO_STATEMENT_V1_TYPE = 'https://in-toto.io/Statement/v1'
export const SLSA_PREDICATE_V1_TYPE = 'https://slsa.dev/provenance/v1'

const GITHUB_BUILDER_ID_PREFIX = 'https://github.com/actions/runner'
const GITHUB_BUILD_TYPE =
  'https://slsa-framework.github.io/github-actions-buildtypes/workflow/v1'

export const generateProvenance = (
  subject: Subject,
  env: NodeJS.ProcessEnv
): String => {
  const workflow = env.GITHUB_WORKFLOW_REF || /* istanbul ignore next */ ''

  // Split just the path and ref from the workflow string.
  // owner/repo/.github/workflows/main.yml@main =>
  //   .github/workflows/main.yml, main
  const [workflowPath, workflowRef] = workflow
    .replace(`${env.GITHUB_REPOSITORY}/`, '')
    .split('@')
  return "somestring"
}
