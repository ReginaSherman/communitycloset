# Capstone Project 

## Summary

Growing up with 3 sisters, sharing clothes was a way of life. We referred to it as the "Community Closet". Now that we are older and don't all live in one house, 
we wanted a solution to be able to still see what clothes are available to borrow without driving to one's house and digging through their closet. 

The idea behind this app sort of marries Poshmark and Pinterest - users can upload photos of their clothes that they're willing to share. Users can view the clothes
uploaded by other users in their network, and request to borrow a piece. Ideally, it will show if a piece is available, if it's being borrowed, and who
is currently borrowing it. 

I would like to implement social auth using NextAuth.js to allow users to sign up with an existing social account, because I know for myself, keeping track of different usernames and passwords is tedious and signing up for new accounts can be annoying. 

## Technologies Used

- React/Next.js
- NextAuth.js
- AWS S3
- Django
- PostgreSQL

## Models 

### User Model 
  - name (String)
  - image (String)
  - closet (Array)

### Item Model 
  - title (String)
  - size (String)
  - article (String)
  - image (?)
  - owner (String)

## User Stories

 - As a user, I want to be able to upload photos of my clothing. 
 - As a user, I want to login with an existing social account.
 - As a user, I want to interact with other users.
 - As a user, I want to view clothing uploaded by other users.
 - As a user, I want to send an email to request to borrow a piece of clothing.
 - As a user, I want to see if a piece is available to borrow.

