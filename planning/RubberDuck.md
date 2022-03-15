## CommunityCloset 

### Overview

When I first try to go to the site, I will be prompted to log in. There will be no ability to interact with 
this app without being signed in as a user. 

Once logged in, I will be redirected to a landing page that displays a random assortment of clothing pictures. There will be the ability to view by clothing type (top, bottom, shoes, etc). 
There will be a navbar which indicates who is signed in, and includes buttons to navigate to the user's closet (My Closet), the user's community (My Community), and the pending requests the user has made (My Requests).

The User's Closet page will list the clothing that that user has uploaded along with a button to Add an Item.

### Fullstack Structure
I have a backend where I am able to access the Admin site, create, update, and delete data, and when
images are uploaded, they are stored in an S3 bucket. I have models for the clothing items and users. 

Still need: 
- A form on the front end to upload an image so that it is uploaded through the UI rather than the django admin site. 
- Fetch data from localhost:8000/api and display the data on the necessary pages
- User authentication with social auth