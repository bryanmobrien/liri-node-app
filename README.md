
Liri helps the user to identify when bands are in town, gives the specfics of song and movies they are interested in.


Liri uses node.js and web apis to assist end-users in gathering information about upcoming concerts for their favorite bands as well as information for specified movies and songs.

There is a keys.js file that exports spofity environment variabls to the main file - liri.js - so they can be used as variables during the spotify-this function calls.

There is a an .env file that holds the actual values for the specific SPOTIFY_ID and SPOTIFY_SECRET.  This musts be created by 
the end user.

Open your terminal or vscode's terminal.
``` 
node liri.js concert-this <your favorite band goes here>
node liri.js spotify-this <your song goes here>
node liri.js movie-this <your movie goes here>
```

Include screenshots, gifs or videos of the app functioning
Screenshot: https://monosnap.com/file/H8dP5wG5p4IGGIRar84CHBjgXdDiH5
Video: https://monosnap.com/file/LpbSW1cqynZCViWPQfLovFivXCpOZj

Deployed version of the liri app
https://bryanmobrien.github.io/liri-node-app/

These are the technologies used in the app
node.js, 
npm package: moment, bandsintown, request, node-spotify-api, dotenv

I created this app as a student of a Fullstack Development bootcamp.
