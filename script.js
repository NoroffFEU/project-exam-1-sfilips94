console.log("check");

const loginUser = {
  email: "filsta02280@stud.noroff.no",
  password: "password",
};
const user = {
  name: "Filip", // Required
  email: "filsta02280@stud.noroff.no", // Required
  password: "password", // Required
  bio: "This is my profile bio", // Optional
  avatar: {
    url: "https://img.freepik.com/free-photo/handsome-handsome-guy-posing-against-white-wall_176420-32958.jpg?t=st=1732973319~exp=1732976919~hmac=c73f07dd0dedf52c3f1c2b21aca1ba20bb23cba755a6d1a2b08952bd09d105cd&w=2000", // Optional
    alt: "My avatar alt text", // Optional
  },
  banner: {
    url: "https://img.freepik.com/free-photo/handsome-handsome-guy-posing-against-white-wall_176420-32958.jpg?t=st=1732973319~exp=1732976919~hmac=c73f07dd0dedf52c3f1c2b21aca1ba20bb23cba755a6d1a2b08952bd09d105cd&w=2000", // Optional
    alt: "My banner alt text", // Optional
  },
  venueManager: true, // Optional
};
const blogPosts = fetch("https://v2.api.noroff.dev/blog/posts")
  .then((response) => response.json())
  .then((data) => data);

console.log(blogPosts);

const response = await fetch("https://v2.api.noroff.dev/auth/register", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(user),
  // ...
});
const data = await response.json();
console.log(data);
