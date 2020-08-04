# React, Redux Saga, Map

### Uses:

- react (^16.9.0)
- redux (^7.1.0)
- redux-saga (^1.0.5)

### Includes: 

- @react-google-maps/api
- react-hook-form
- axios
- geolib
- file-loader (4.2.0) 
- connected-react-router (^6.5.2)
- Simple folder structure to quick project navigation
- Pages Lazy loading 
- Initially created  with CRA

### Setup

- Run: `yarn install`
- Start: `yarn start`

Note: This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Description

React Application for calculating geometric distance between two selected geo-points,
using Google Map and a list of minimal dependencies.

This is the web app that consists of two text address inputs (for Point A and Point B),
Google Map container and calculated geometric distance value.

User may manually type in Address both for Point A and Point B, as well as is able 
to click on Google Map, to obtain corresponding address string.

API Endpoints:
1. Get Geocode
Example of Google call: https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY
2. Reverse geocode
Example of Google call: https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY

The app uses geolib package to calculate Geometric distance between 
two lat/long coordinates.

You need to add your Google API key to /config.js to enable project.

### Ideas for future

- Multiple points instead of two points
- Show markers for each point
- Move map center to typed address while typing
- Show prices of airline tickets between each two points
- Show weather for each point
- Integrate tickets sell system
- Add sign up and sign in system


 
