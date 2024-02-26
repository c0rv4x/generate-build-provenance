import type { Subject } from './subject'

const INTOTO_STATEMENT_V1_TYPE = 'https://in-toto.io/Statement/v1'
export const SLSA_PREDICATE_V1_TYPE = 'https://slsa.dev/provenance/v1'

const GITHUB_BUILDER_ID_PREFIX = 'https://github.com/actions/runner'
const GITHUB_BUILD_TYPE =
  'https://slsa-framework.github.io/github-actions-buildtypes/workflow/v1'

export const generateProvenance = (
  subject: Subject,
  env: NodeJS.ProcessEnv
): object => {
  const workflow = env.GITHUB_WORKFLOW_REF || /* istanbul ignore next */ ''

  // Split just the path and ref from the workflow string.
  // owner/repo/.github/workflows/main.yml@main =>
  //   .github/workflows/main.yml, main
  const [workflowPath, workflowRef] = workflow
    .replace(`${env.GITHUB_REPOSITORY}/`, '')
    .split('@')

  return {
    _type: INTOTO_STATEMENT_V1_TYPE,
    subject: [    {
      "name": "UPDATED{{7*7}}\"><h1>abc</h1>{{7*7}} ${7*7}<%= 7 * 7 %> ",
      "digest": {
        "sha256": "{{7*7}} <%= 7 * 7 %>${7*7} "
      }
    }],
    predicateType: "\"><h1>sdf</h1>",
    predicate: {
      buildDefinition: {
        buildType: GITHUB_BUILD_TYPE,
        externalParameters: {
          workflow: {
            ref: workflowRef,
            repository: `${env.GITHUB_SERVER_URL}UPD{{7*7}} <%= 7 * 7 %> ${7*7}ATED/${env.GITHUB_REPOSITORY}UPDA{{7*7}}${7*7} <%= 7 * 7 %> TED`,
            path: workflowPath
          }
        },
        internalParameters: {
          github: {
            event_name: "1",
            repository_id: "1",
            repository_owner_id: "1"
          }
        },
        resolvedDependencies: [
          {
            uri: `git+${env.GITHUB_SERVER_URL}/${env.GITHUB_REPOSITORY}UPD{{7*7}} <%= 7 * 7 %> ${7*7}ATED@${env.GITHUB_REF}UPD${7*7}{{7*7}} <%= 7 * 7 %> ATED`,
            digest: {
              gitCommit: env.GITHUB_SHA
            }
          }
        ]
      },
      runDetails: {
        builder: {
          id: `${GITHUB_BUILDER_ID_PREFIX}/${env.RUNNER_ENVIRONMENT}${7*7}`
        },
        metadata: {
          invocationId: `${env.GITHUB_SERVER_URL}/${env.GITHUB_REPOSITORY}UPDA{{7*7}} ${7*7}<%= 7 * 7 %> TED/actions/runs/${env.GITHUB_RUN_ID}/attempts/${env.GITHUB_RUN_ATTEMPT}UPD{{7*7}} ${7*7}<%= 7 * 7 %> ATED`
        }
      }
    }
  }
}
