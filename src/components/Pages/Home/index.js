import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Map from "./Map";
import Form from "./Form";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  text-align: center;
`;

const HomePage = () => {
  return (
    <Container>
      <h1>Map Distance</h1>
      <h2>Please choose 2 points</h2>
      <Form />
      <Map />
    </Container>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
