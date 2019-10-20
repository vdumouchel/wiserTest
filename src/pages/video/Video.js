import React, { useEffect, useState } from "react"
import { Link, useHistory, useParams, useLocation } from "react-router-dom"

// import Grapqh query definition
import { getConference as GetConference } from "../../graphql/queries"

// imports from Amplify library
import { API, graphqlOperation } from "aws-amplify"

//importer react player
import ReactPlayer from "react-player"

// import design elements from Rebass
import { Box, Card, Image, Heading, Text } from "rebass"

function Video() {
  const [video, updateVideo] = useState([])
  let location = useLocation()

  useEffect(() => {
    getVideo()
  }, [])

  async function getVideo() {
    try {
      let conferenceID = location.state.conferenceID
      console.log("conferenceID: ", conferenceID)
      const id = { id: conferenceID }
      const videoData = await API.graphql(graphqlOperation(GetConference, id))
      console.log("videoData: ", videoData.data.getConference.video.src)
      updateVideo(videoData.data.getConference.video.src)
      console.log("video", video)
    } catch (err) {
      console.log("error fetching video data from api...", err)
    }
  }

  return (
    <div>
      <Box width={512}>
        <ReactPlayer url={video} controls />
      </Box>
    </div>
  )
}
export default Video
