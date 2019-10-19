/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createHost = `mutation CreateHost($input: CreateHostInput!) {
  createHost(input: $input) {
    id
    name
    conferences {
      nextToken
    }
  }
}
`;
export const updateHost = `mutation UpdateHost($input: UpdateHostInput!) {
  updateHost(input: $input) {
    id
    name
    conferences {
      nextToken
    }
  }
}
`;
export const deleteHost = `mutation DeleteHost($input: DeleteHostInput!) {
  deleteHost(input: $input) {
    id
    name
    conferences {
      nextToken
    }
  }
}
`;
export const createConference = `mutation CreateConference($input: CreateConferenceInput!) {
  createConference(input: $input) {
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
export const updateConference = `mutation UpdateConference($input: UpdateConferenceInput!) {
  updateConference(input: $input) {
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
export const deleteConference = `mutation DeleteConference($input: DeleteConferenceInput!) {
  deleteConference(input: $input) {
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
export const createVideo = `mutation CreateVideo($input: CreateVideoInput!) {
  createVideo(input: $input) {
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
export const updateVideo = `mutation UpdateVideo($input: UpdateVideoInput!) {
  updateVideo(input: $input) {
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
export const deleteVideo = `mutation DeleteVideo($input: DeleteVideoInput!) {
  deleteVideo(input: $input) {
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
