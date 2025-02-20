# CS-465

Architecture

Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).

In my full stack project, I used a combination of Express with HTML and JavaScript, along with a single-page application (SPA) built using Angular. Express, HTML, and JavaScript provided a straightforward way to render static pages and manage simple routing, but this approach required full-page reloads, which could impact user experience. In contrast, the Angular SPA dynamically updated the UI without requiring page reloads, providing a more seamless and interactive experience. This approach also allowed for better state management, modularity, and scalability, making it more efficient for handling user interactions and data-driven updates.

Why did the backend use a NoSQL MongoDB database?

The backend of the application utilized MongoDB, a NoSQL database, due to its flexibility and scalability. Unlike traditional relational databases, MongoDB stores data in a JSON-like format, making it easier to manage complex, nested data structures such as user profiles and travel bookings. This schema-less design allowed for modifications without requiring extensive migrations, making development more agile. Additionally, MongoDB’s ability to scale horizontally made it an ideal choice for cloud-based applications, ensuring that the system could handle increased traffic and data loads as the application expanded.


Functionality

How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?

JSON differs from JavaScript in that it is a lightweight data format used for structuring and exchanging data, whereas JavaScript is a full-fledged programming language. JSON acts as the bridge between the frontend and backend, enabling smooth data transmission. In my project, when a user submitted a booking request, the frontend sent the data as a JSON object to the backend via an API call. The backend then processed and stored this data in MongoDB before responding with another JSON object, which the frontend used to update the UI. This structured communication made the integration between different parts of the application efficient and seamless.

Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

Throughout the development process, I changed the code to improve functionality and efficiency. One key example was modularizing the booking form by creating reusable UI components for input fields. Instead of having redundant code for different text inputs, I designed a single input component that could be used throughout the application. This approach reduced code duplication, ensured consistency in UI design, and made maintenance easier. Reusable components also improved scalability since updates to a single component would automatically reflect across the entire application.


Testing

Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

Testing was an essential part of ensuring the reliability and security of the application, especially when working with APIs. The application used different HTTP methods such as GET for retrieving data, POST for submitting new entries, PUT for updating existing records, and DELETE for removing data. Each of these methods corresponded to an API endpoint that the frontend interacted with. Security was a key consideration, and I implemented authentication and authorization using JSON Web Tokens (JWT) to restrict access to protected endpoints.


Reflection

How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This course has played a significant role in helping me achieve my professional goals by strengthening my full stack development skills and preparing me for real-world applications. I have gained hands-on experience with the MEAN stack (MongoDB, Express.js, Angular, and Node.js), which has improved my ability to build scalable and efficient web applications. I have also developed skills in API development, database management, authentication, and cloud deployment. Additionally, working on UI/UX design has enhanced my ability to create user-friendly interfaces. These skills, combined with my interest in data analysis, make me a more competitive candidate in the job market, especially for roles in software development and full stack engineering.
