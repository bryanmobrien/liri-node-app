Clearly state the problem the app is trying to solve (i.e. what is it doing and why)
Liri helps the user to identify when bands are in town, gives the specfics of song and movies they are interested in.


Give a high-level overview of how the app is organized
Liri uses node.js and web apis to assist end-users in gathering information about upcoming concerts for their favorite bands as well as information for specified movies and songs.
there is a keys.js file that exports spofity environment variabls to the main file - liri.js - so they can be used as variables during the spotify-this function calls.
There is a an .env file that holds the actual values for the specific SPOTIFY_ID and SPOTIFY_SECRETA

Give start-to-finish instructions on how to run the app
Open your terminal or vscode's terminal.
``` 
node liri.js concert-this <your favorite band goes here>
node liri.js spotify-this <your song goes here>
node liri.js movie-this <your movie goes here>
```

Include screenshots, gifs or videos of the app functioning
Screenshot: https://monosnap.com/file/H8dP5wG5p4IGGIRar84CHBjgXdDiH5
Video: https://monosnap.com/file/LpbSW1cqynZCViWPQfLovFivXCpOZj

Contain a link to a deployed version of the app
N/A

Clearly list the technologies used in the app
node.js, 
npm package: moment, bandsintown, request, node-spotify-api, dotenv

State your role in the app development
As a student, I laid the framework/skeleton for this app.  However, I give a ton of credit to user devans1913 on github.  He was instrumental in getting the app to run successfully - although I still need to tweak it.
