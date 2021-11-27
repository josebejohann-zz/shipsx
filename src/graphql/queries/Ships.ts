import { request, gql } from 'graphql-request'

const baseURL = 'https://api.spacex.land/graphql/'

export const SHIPS_QUERY = gql`
  {
  ships {
    name
    missions {
      name
    }
  }
}
`;

export const ships = request(baseURL, SHIPS_QUERY).then(({ ships }) => ships)