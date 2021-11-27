import { request, gql } from 'graphql-request';

const baseURL = 'https://api.spacex.land/graphql/';

export const SHIPS_QUERY = gql`
  {
    ships {
      active
      name
      missions {
        name
      }
  }
}
`;

export const allShips = request(baseURL, SHIPS_QUERY).then(({ ships }) => ships);
