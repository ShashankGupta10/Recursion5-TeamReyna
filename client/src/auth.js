// auth.js

// Function to set user information in localStorage
// export function setUser(user) {
//     localStorage.setItem('user', JSON.stringify(user));
//   }
  
  // Function to get user information from localStorage
  export function getUser() {
    const userString = localStorage.getItem('user');
    return userString ? JSON.parse(userString) : null;
  }
  