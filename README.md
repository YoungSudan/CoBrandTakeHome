# Full Stack Take Home Challenge

**Included**
- source code
- ReadME file

### How to run 
This app has two different servers, one for the UI and another for the backend server. First you can cd in the the root folder and run `npm install` to install all the dependencies.
- cd into the server folder and run `node server.js` to start the backend server to be able to call the third party API.
- in another terminal navigate to the root folder and run `npm start` to start the UI where you will be redirected to.

## Solution approach
The main goal of this challenge was to be able to get multiple pieces of information from a third party and display it. The data that we recive from the api included things like temperature, humidity, wind speed, and weather conditions. Since we have different types of information I deciede to create different components to display each specific piece. This include current weather, Wind data, air quality, and time . As well as a search bar that the user can use to search for the weather information for a specic city.


## Challenges I face

- One challenged I face was when I created all the components and tried to render them with no data recived from the server, this cause an error stating that the data we are attempting to display is not available/null. To avoid this I decided to use a skeleton component (`<Skeleton/>`) that will be displayed while the UI is waiting for the server to send the information back (either data or errors)
- Another problem I faced was dynamically displaying the right type of icon (cloud, sun, sunny with cloud) depending on the temperature of the city. For this I found that the openweathermap API returns a icon id that you can use to request an icon image from another endpoint `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
- On the backend A small problem I face was running into CORS issues when attempting to make a request from the UI to the backend, to solve this I added the cors middleware to the express app,, allowing request from any origin (not the best security practive but okay for this case)

## Images
| Skeleton State  | Error State   | Data State  |
|---|---|---|
|<img width="1069" alt="Screenshot 2023-05-18 at 6 52 48 AM" src="https://github.com/YoungSudan/CoBrandTakeHome/assets/97282856/763def39-c375-4d3d-95d6-fd3f5581b43d">|<img width="1069" alt="Screenshot 2023-05-18 at 6 53 02 AM" src="https://github.com/YoungSudan/CoBrandTakeHome/assets/97282856/4038d61e-52e6-4cf0-8b1c-fadc84de54b9">|<img width="1069" alt="Screenshot 2023-05-18 at 6 52 56 AM" src="https://github.com/YoungSudan/CoBrandTakeHome/assets/97282856/ec624e23-955b-47b9-b2b0-b1cadd97c2e0">|

## Next steps
If I had more time I have a few improvements that I could have implemented:
- Better spacing & fonts for text and components (flex, grids,avoid whitespace etc) and colour selection
- Add better error handling on the server side (creating custom middleware for error handling) & logging - Cache data we revice from API
- Add ability for uses to track and run previous searches (cache?) and compare two cities
- Multi-day view (working progress)
- write more tests and create CI pipeline to check formatting, tests and integration(github actions, buildkite)

## Resources
- I used a component from [flowbite](https://flowbite.com/docs/forms/search-input/)
- I used the  [TailwindCss](https://tailwindcss.com/) css framework for some components (styling,spacing,animation etc)
- I used some icons from [MaterialUI](https://mui.com/material-ui/material-icons/)
