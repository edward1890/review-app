import React, { Component } from 'react';
import SearchBar from "./components/SearchBar.js";
import YouTubeSearch from "youtube-api-search";
import { Container, Row, Col } from 'reactstrap';
import VideoDetail from "./components/VideoDetail.js";
import VideoList from "./components/VideoList.js";
const apiKey = "AIzaSyComiW_UWQNK7dvWaAjkcxRCmfh1J91qdE";

class App extends Component {
    state = {
      videos: [],
      selectedVideo: null
    }

    componentDidMount() {
      this.runSearch("nate hills");
    } 
    runSearch(term) {
      YouTubeSearch({ key: apiKey, term: term }, videos => {
        console.log(videos);
        this.setState({ videos, selectedVideo: videos[0] });
      });
    
    }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <SearchBar />
          </Col>
        </Row>
        <Row>
          <Col md="8">
            <VideoDetail selectedVideo={this.state.selectedVideo} myName="edward"/>
          </Col>
          <Col md="4">
            <VideoList />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
