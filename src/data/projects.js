import trackerLogo from '../images/tracker_logo.png'
import redisGraphql from '../images/redis_graphql.png'
import linguiGraphql from '../images/lingui_graphql.png'

const projects = [
  {
    image: trackerLogo,
    imageAlt: 'Tracker Logo',
    imageBackground: '#2E2E40',
    projectUrl: 'https://github.com/canada-ca/tracker',
    title: 'Tracker',
    description:
      'Track Government of Canada domains for adherence to digital security best practices and federal requirements.',
  },
  {
    image: redisGraphql,
    imageAlt: 'Redis and GraphQL Logos',
    imageBackground: '#FFFFFF',
    projectUrl:
      'https://github.com/nsdeschenes/graphql-redis-subscription-demo',
    title: 'Redis GraphQL Subscription Demo',
    description:
      'Demo repo testing how to use the graphql-redis-subscriptions package, for use in other projects.',
  },
  {
    image: linguiGraphql,
    imageAlt: 'Lingui and GraphQL Logos',
    imageBackground: '#FFFFFF',
    projectUrl: 'https://github.com/nsdeschenes/lingui-gql-demo',
    title: 'Lingui + GraphQL Demo',
    description:
      'Demo repo to show the ability to use linguiJS with GraphQL through context.',
  },
]

export default projects
