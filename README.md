# Simple node web app with sessions

In this project, I am demonstrating how I would manage sessions in an express app. To do this, I am using an external library express sessions.

Express session creates a session object that can be accessed by any endpoint. A cookie is given to the end user to save which contains a token and an expiry date. When a request is sent by a user, the browser will send the request along with the cookie, and using the information on the cookie, we are able to retrieve the correct session object that contains information unique to the user.

To demonstrate this, I have created a website with 3 pages. A home page that displays the users's name, and a page that displays the user's age, and a form where you can insert those information.

If a session is not active, both the home page and the age page wil redirect the user to the form page to input their name and their age. Once the information is received, a session will be created and the user can freely explore the two other pages. After 10 seconds, the cookie will expire, prompting a further request to redirect to the form page again.

To make sure that the user is not logged out when active, I have made the session rolling. This means that if any further requests are sent to the server, the session duration will refresh. But if a new request is not sent within the 10 seconds, the session will expire. You can see this in action by continously reloading the page and you can see that the session will persist beyond the 10 second mark.