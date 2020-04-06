# This is a POC project to list videos

This project is built from scratch without using "create react app". 

# Assumptions
1) Total pages of data is only 3.
2) Title will shrink while selecting search icon.
3) Back button is non functional as per the requirement.
4) User needs to close the search to display all videos under that title.
5) Ideally search goes to backend but in this case we may need to call the rest of the JSON file
   when user start typing.


# TODO
1) Add copy html plugin in webpack
2) Add copy asset plugin in webpack
3) Add Jest and Enzyme for testing.
4) Add CSS plugins to combine and import.
5) Add logger.
6) Recheck the logic for the scroll.
7) Finish the header css.
8) Show search icon and on tap of that animate the width of search box to left, change the search icon to X 
   on tap of X animate back search icon and dispatch new action to update search term to ''

Please install the following software:
1) ***Node JS (v 10+)*** 
2) ***NPM (v 6+)***

# 2) Project Setup
Execute the following command in order to download all the required project dependencies.

````
npm install
````

# 3) Running the Project

````
npm run start
````
