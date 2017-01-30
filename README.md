# fair2017
Design Career Fair at UCD 2017 Site

Temporary development domain served from the gh-pages branch: http://dcf.honklr.com/

# Commands

Run in a terminal from the project root "ucd_dcf_2017/"

`grunt` - production build, clears "/dist" and regenerates all files

`grunt serve` - Launches a local server on [http://localhost:2017](http://localhost:2017)

Then watches for changes to source files and rebuilds to "/dist". CSS changes should apply automatically in the browser. HTML and script changes should automatically reload the page.

`grunt publish` push compiled site from master to gh-pages

# Setup

Install node.js LTS. https://nodejs.org/en/

Install grunt with `npm install -g grunt-cli` in a console with admin rights (windows). For mac/nix use `sudo npm install -g grunt-cli`.

Open the console to the project root and run `npm install` to download all of the dependencies.