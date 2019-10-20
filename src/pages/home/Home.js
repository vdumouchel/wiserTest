import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"

// import Grapqh query definition
import {
  listHosts as ListHosts,
  listConferences as ListConferences
} from "../../graphql/queries"

// imports from Amplify library
import { API, graphqlOperation } from "aws-amplify"

// import design elements from Rebass
import { Box, Card, Image, Heading, Text } from "rebass"

function Home() {
  let history = useHistory()
  const [hosts, updateHosts] = useState([])
  const [conferences, updateConferences] = useState([])
  const [id, updateID] = useState([])

  useEffect(() => {
    getHosts()
    getConferences()
  }, [])

  async function getHosts() {
    try {
      const hostData = await API.graphql(graphqlOperation(ListHosts))
      console.log("hostData: ", hostData)
      updateHosts(hostData.data.listHosts.items)
    } catch (err) {
      console.log("error fetching host data from api...", err)
    }
  }

  async function getConferences() {
    try {
      const conferenceData = await API.graphql(
        graphqlOperation(ListConferences)
      )
      console.log("conferenceData: ", conferenceData.data.listConferences.items)
      updateConferences(conferenceData.data.listConferences.items)
      const mapped = conferenceData.data.listConferences.items
      const mapped2 = await mapped.map(a => a.id)
      console.log("mapped2:...", mapped2[0])
      updateID(mapped2[0])
    } catch (err) {
      console.log("error fetching conference data from api...", err)
    }
  }

  return (
    <div>
      <h1>Home</h1>
      <main>this is a list of conference hosts</main>
      <div>
        {conferences.map((conference, index) => (
          <div key={index}>
            <Box
              width={256}
              onClick={() =>
                history.push({
                  pathname: "/video",
                  state: { conferenceID: conference.id }
                })
              }
            >
              <Card
                sx={{
                  p: 1,
                  borderRadius: 4,
                  boxShadow: "0 0 16px rgba(0, 0, 0, .25)"
                }}
              >
                <Image
                  src={conference.poster}
                  sx={{
                    borderRadius: 4
                  }}
                />
                <Box px={2}>
                  <Heading as="h3">{conference.title}</Heading>
                </Box>
              </Card>
            </Box>
          </div>
        ))}
      </div>
      <div>
        {hosts.map((host, index) => (
          <div key={index}>
            <h3>{host.id}</h3>
            <h5>{host.name}</h5>
          </div>
        ))}
      </div>
      <nav>
        <ol>
          <li>
            <Link to="profile">Profile</Link>
          </li>
          <li>
            <Link to="app">App</Link>
          </li>
        </ol>
      </nav>
    </div>
  )
}

export default Home
