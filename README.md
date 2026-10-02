IT313 Components and JSX
Student Roster Card Renderer
This project is a React Native and Expo application for Laboratory 4 in IT313 - Mobile Programming.
The activity demonstrates how functional components, JSX, props, conditional rendering, and list keys can be used to create a simple student roster.
Problem
The application receives a list of enrolled students. Each student should be displayed using a reusable StudentCard component.
Each card displays:

- Student name
- Course
- Number of units
- Full Load label when the student is enrolled in a full load
  The application also displays the total number of students and includes a button for reversing the roster order.
  Component Structure
  StudentCard
  StudentCard is a reusable functional component.
  It receives these props:
- name
- course
- units
- isFullLoad
  The props are destructured in the function parameter. The component uses JSX expressions to display the student information.
  The Full Load label uses conditional rendering with the && operator, so it only appears when isFullLoad is true.
  StudentRoster
  StudentRoster is the parent component that contains the student data.
  It uses .map() to create one StudentCard for every student in the array.
  Each StudentCard uses the student's id as its key:
  key={student.id}
  The student count is calculated using:
  students.length
  The roster can also be reversed using a button.
  Technologies Used
- React Native
- Expo
- TypeScript
- JSX
  How to Run

1. Open the project folder in a terminal.
2. Install the project dependencies:
   npm install
3. Start the Expo development server:
   npx expo start
4. Open the application using Expo Go or an emulator.
   Author
   Jhazmin PalmesIT313 - Mobile Programming
