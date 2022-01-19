import { gql } from '@apollo/client';

const GET_REPOSITORIES = gql`
  query getRepositories($repoName: String!, $cursor: String) {
    search(query: $repoName, type: REPOSITORY, first: 20, after: $cursor) {
      repositoryCount
      nodes {
        ... on Repository {
          id
          owner {
            login
          }
          nameWithOwner
          createdAt
          name
          forkCount
          description
          stargazerCount
          url
          watchers {
            totalCount
          }
          openGraphImageUrl
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        startCursor
      }
    }
  }
`;

export default GET_REPOSITORIES;
