/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateHost = `subscription OnCreateHost {
  onCreateHost {
    id
    name
    conferences {
      nextToken
    }
  }
}
`;
export const onUpdateHost = `subscription OnUpdateHost {
  onUpdateHost {
    id
    name
    conferences {
      nextToken
    }
  }
}
`;
export const onDeleteHost = `subscription OnDeleteHost {
  onDeleteHost {
    id
    name
    conferences {
      nextToken
    }
  }
}
`;
export const onCreateConference = `subscription OnCreateConference {
  onCreateConference {
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
export const onUpdateConference = `subscription OnUpdateConference {
  onUpdateConference {
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
export const onDeleteConference = `subscription OnDeleteConference {
  onDeleteConference {
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
export const onCreateVideo = `subscription OnCreateVideo {
  onCreateVideo {
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
export const onUpdateVideo = `subscription OnUpdateVideo {
  onUpdateVideo {
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
export const onDeleteVideo = `subscription OnDeleteVideo {
  onDeleteVideo {
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
