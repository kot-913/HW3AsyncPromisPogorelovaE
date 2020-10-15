// // 1.
// // We have a “regular” function. How to call async from it and use its result?

//MY CODE IS HERE!

// async function delay(ms) {
//   await new Promise((res) => setTimeout(res, ms));
// }

// delay(3000).then(() => alert("runs after indicted time"));

// 2.
// ...what to write here?
// we need to call async wait() and wait to get 10
// remember, we can't use "await"
//========================================================================================================================================

//MY CODE IS HERE!

// async function wait() {
//   await new Promise((resolve) => setTimeout(resolve, 1000));

//   return 10;
// }
// function f() {
//   wait().then((res) => console.log(res));
// }
// f();

// ========================================================================================================================================

// 3.
// Resolve all promises and show in console their status and values
// HINT: Remember about usage of Promise.all(),
// there is a similar method that will help you to resolve all promises
// despite of their results

// =========================================================================================================================

//MY CODE IS HERE!

// const promise1 = new Promise((res) => setTimeout(() => res("done"), 1000));
// const promise2 = Promise.reject("Through error");
// const promise3 = 6;

// const promises = [promise1, promise2, promise3];

// Promise.allSettled(promises).then((results) =>
//   results.forEach((result) => console.log(result.status, result.value))
// );

//===========================================================================================================================

// 4.
// You need to handle getPosts() function with Promise
// Now you need to handle getPosts() function with async/await
// receive posts and show in console, don't forget about error handling :)

function getPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts");
}

//==============================================================================================================================

//MY CODE IS HERE!

// handleGetPostsWithPromise().then((posts) => {
//   console.log(posts);
// });

// function handleGetPostsWithPromise() {
//   return fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((resp) => {
//       return resp.json();
//     })
//     .catch((err) => console.error(err));
// }

// function handleGetPostsWithPromise() {
//   return fetch("https://jsonplaceholder.typicode.com/posts7878787")  //with mistake in url
//     .then((resp) => {
//       return resp.json();
//     })
//     .catch((err) => console.error(err));
// }

function getPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts");
}

async function handleGetPostsWithAsyncAwait() {
  let posts;
  let postsNew;
  try {
    posts = await getPosts();
    postsNew = await posts.json();
    console.log(postsNew);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Done");
  }
}

handleGetPostsWithAsyncAwait();

// handleGetPostsWithAsyncAwait().then((posts) => {
//   console.log(posts);
// });

// async function handleGetPostsWithAsyncAwait() {
//   try {
//     const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
//     return resp.json();
//   } catch (err) {
//     console.error(err);
//   }
// }

// async function handleGetPostsWithAsyncAwait() {
//   try {
//     const resp = await fetch("https://jsonplaceholder.typicode.com/posts87877");  //with mistake in url
//     return resp.json();
//   } catch (err) {
//     console.error(err);
//   }
// }
