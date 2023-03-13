# TFP - Time For Print
<img width="1383" alt="Inspo" src="https://user-images.githubusercontent.com/108159910/224586476-51cddf02-a00c-48d5-ae24-ae979a3a8e46.png">
***The photo above is not the Design of this project. It is an inspo photo from: https://dribbble.com/shots/18852672-Mobile-Design-for-Dating-App***

Version 1

Prepared by TFP Team

January 1 2023

https://www.tfp.support

## Project Description
Tinder but for photographers, videographers, and other professionals or enthusiasts in the media production industry. 
Utilized a MERN stack to build a full stack application in 1 week with de-coupled React frontend and Express backend.

---
# Wireframes
## User Flow Diagram
- User Sign Up: The user will create an account by providing their email address, password, and basic information such as name, location, and skills.

- Profile Creation: The user will create a profile by uploading a profile picture, portfolio, and additional information such as work experience, education, and social media links.

- Swipe Screen: The user will be taken to the swipe screen where they can swipe left or right on other users' profiles to express interest or disinterest in connecting.

- Matches: If two users express interest in each other, a match is made and they are notified. The user can then view their matches and start messaging other professionals within the app.

- Search: The user can use the search feature to find other professionals based on specific criteria such as location, skills, and work history.

- Messaging: The user can send and receive messages from other professionals within the app, and discuss potential projects or collaborations.

- Edit Profile: The user can edit their profile at any time to update their information, portfolio, or other details.

- Log Out: The user can log out of the app at any time.

# MVP User Stories

***MVP User Stories***
- As a user of the media production professional networking app, I want to be able to create a profile that showcases my skills and portfolio so that I can connect with potential clients or collaborators.

- I want to be able to easily swipe left or right on other users' profiles to express interest or disinterest in connecting with them. If both users express interest in each other, then a match is made and they can message each other directly within the app to discuss potential projects or collaborations.

- Additionally, I want to be able to search for users based on specific criteria, such as location, skills, and work history, so that I can find the most relevant professionals for my needs.

- The MVP of this app would allow users to sign up, create a profile, and start swiping on other users' profiles to find potential matches. Matches can then message each other directly within the app to discuss potential projects or collaborations. The app would also have a search feature that allows users to find other professionals based on specific criteria.

***MVP+***
- Minimalism: Using a simple, clean design that emphasizes negative space, typography, and a limited color palette to create a more modern and streamlined look.

- Responsive design: Designing interfaces that adjust seamlessly to different screen sizes, so that the user experience is optimal on any device.

- Microinteractions: Adding small, interactive elements to interfaces to provide feedback, add personality, and improve overall user experience.

- Personalization: Using data and machine learning algorithms to personalize the user experience based on individual preferences, behavior, and history.

- Animated transitions: Using animations and transitions to help users understand changes in the interface, such as when navigating between pages, and to enhance the overall visual appeal of the design.

- Storytelling: Using visual elements and interactions to tell a story and create an emotional connection with the user.

- Voice UI: Incorporating voice commands and chatbots to provide users with an alternative way to interact with an interface and access information.

- Dark mode: Offering users the option to switch to a dark color scheme, which can be easier on the eyes and reduce eye strain.

- Material design: Using Google's Material Design guidelines to create interfaces that are intuitive and easy to use, while also being visually appealing.

- Accessibility: Incorporating accessibility considerations, such as alternative text, high-contrast modes, and keyboard navigation, to make the interface usable for users with disabilities.

---
# ERDs
***Entities:***

- User: Each user will have a unique profile and be able to swipe on other users' profiles, send and receive messages, and create and edit their own profile.

- Profile: Each user will have a profile that includes information such as name, location, skills, portfolio, work experience, education, and social media links.

- Swipe: Each swipe on another user's profile will be recorded and used to determine matches.

- Match: A match occurs when two users have both swiped right on each other's profiles.

- Message: Users can send and receive messages to each other within the app to discuss potential projects or collaborations.

***Relationships:***

- One user can have one profile.

- One user can have many swipes.

- Many swipes can result in one match.

- Many matches can result in many messages.

- One profile can have many portfolio items.

- One profile can have many work experiences.
---
# API

- Authentication API: For securely handling user authentication and authorization, you could use a service such as Firebase Authentication or Auth0.

- https://firebase.google.com/docs/auth
- https://auth0.com/docs/

- Cloud Storage API: To store and retrieve user portfolios, images, and other media, you could use a cloud storage solution such as Amazon S3 or Google Cloud Storage.

- https://firebase.google.com/docs/firestore
- https://aws.amazon.com/s3/?nc=sn&loc=1

- Geolocation API: To enable location-based search and matching, you could use a geolocation API such as Google Maps API or OpenStreetMap.

- https://developers.google.com/maps/documentation

- Push Notification API: To send notifications to users when they receive a new match or message, you could use a push notification API such as Firebase Cloud Messaging or OneSignal.

- https://firebase.google.com/docs/cloud-messaging
- https://pusher.com/docs/

- Image Processing API: To process user images and portfolios, you could use an image processing API such as Cloudinary or Imgix.

- https://docs.aws.amazon.com/rekognition/index.html

- Payment API: To enable users to pay for premium features or services, you could use a payment gateway API such as Stripe or PayPal.

- https://stripe.com/docs/payments

## API Response

```json
{
  // HAVEN'T DONE TESTING YET
}
```

# Component Hierarchy
- App: The top-level component that serves as the container for all other components and handles state management.

- Sign Up: The component that allows new users to create an account by providing their email address, password, and basic information.

- Login: The component that allows users to log in to their existing account.

- Profile Creation: The component that allows users to create their profile by uploading a profile picture, portfolio, and additional information such as work experience, education, and social media links.

- Swipe Screen: The component that allows users to swipe left or right on other users' profiles to express interest or disinterest in connecting.

- Matches: The component that shows the user's matches and allows them to start messaging other professionals within the app.

- Search: The component that allows users to search for other professionals based on specific criteria such as location, skills, and work history.

- Messaging: The component that allows users to send and receive messages to and from other professionals within the app.

- Edit Profile: The component that allows users to edit their profile at any time to update their information, portfolio, or other details.

- Portfolio Item: The component that displays each item in a user's portfolio.

- Work Experience: The component that displays each item in a user's work experience.


# Contributors

1. Brendon Van [Github Profile](https://github.com/brendonvan)
2. Kevin Ng [Github Profile](https://github.com/kevinszn23)
3. Darion Daire [Github Profile](https://github.com/Darion-D)
4. Aaron Johnston [Github Profile](https://github.com/aaronjohnston4)
5. Nick Duitsman [Github Profile](https://github.com/nduitsman)
