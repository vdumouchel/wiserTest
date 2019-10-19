/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getHost = `query GetHost($id: ID!) {
  getHost(id: $id) {
    id
    name
    conferences {
      nextToken
    }
  }
}
`;
export const listHosts = `query ListHosts(
  $filter: ModelHostFilterInput
  $limit: Int
  $nextToken: String
) {
  listHosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
    }
    nextToken
  }
}
`;
export const getConference = `query GetConference($id: ID!) {
  getConference(id: $id) {
    id
    title
    topic
    poster
    keynote_quantity
    price
    likes
    host {
      id
      name
    }
    video {
      id
      src
    }
  }
}
`;
export const listConferences = `query ListConferences(
  $filter: ModelConferenceFilterInput
  $limit: Int
  $nextToken: String
) {
  listConferences(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      topic
      poster
      keynote_quantity
      price
      likes
    }
    nextToken
  }
}
`;
export const getVideo = `query GetVideo($id: ID!) {
  getVideo(id: $id) {
    id
    src
    conference {
      id
      title
      topic
      poster
      keynote_quantity
      price
      likes
    }
  }
}
`;
export const listVideos = `query ListVideos(
  $filter: ModelVideoFilterInput
  $limit: Int
  $nextToken: String
) {
  listVideos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      src
    }
    nextToken
  }
}
`;
