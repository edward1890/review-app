import React, { Component } from 'react';
import SearchBar from "./components/SearchBar.js";
import { Container, Row, Col } from 'reactstrap';
import VideoDetail from "./components/VideoDetail.js";
import VideoList from "./components/VideoList.js";
const apiKey = "AIzaSyComiW_UWQNK7dvWaAjkcxRCmfh1J91qdE";

class App extends Component { 
    runSearch(term) {

    
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
            <VideoDetail />
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
