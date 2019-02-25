# Description

My History Tour is an app that allows users to sign up and view all of the registered landmarks in the DC area. They can create, view, comment on, and rate historical landmarks. They can also create their own "Tours" which is an array of Landmarks.

Users can view other user's tours and can search for tours based on themes or keywords.

# User Stories

I am organizing a trip to DC for a group of women who all participated in the women's march. I used My History Tour to find landmarks that were pivotal in the women's suffrage movement.

I just moved to DC and I am really interested in DC scandals. I used My History Tour to find landmarks related to political scandals. 

My mom and her sisters are coming to visit me in DC for 2 days. I used My History Tour to find the most efficient route through DC, hitting all of the major landmarks, and I was able to tell them about the history of each site we visited. 


# Data Models

User:
- name
- email
- Tours
- lamdmarksFavorited
- favorites: [ref: ObjectIds]

new Schema({
    favorites: [{ type: Schema.ObjectId, ref: 'Landmark' }]
})

Landmarks:
- title
- description
- address
- neighborhood
- keywords
- ratings
- comments
- facts
- popularity (optional)

Tours:
- title
- description
- landmarks
- neighborhood
- keywords
- rating
- comments


# RESTful Routes

## User

## Landmarks

## Tours



# MVP

## Bronze

Users can:
- sign up
- log in
- log out
- create, view, favorite, rate, and comment on Landmarks
- create, view, update, comment on, favorite, and rate Tours

## Silver

## Gold
- User can allow the app to view their location, and will send them push notifications when they are near a historical marker
- the user can choose which type of content they want to be notified of, like topic or type of facts
- users will get badges and points if they open the notifications, learning more about DC in the process.

# Dependencies

- express
- hbs 
- mongodb
- mongoose
- body-parser
- method-override
- passport
- express-session
- passport-local
- cookies


