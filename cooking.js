// synchronous [solidity]
// asynchronous [javascript]

// Cooking:

// Synchronous
// 1. Put popcorn in microvave -> Promise
// 2. Wait for popcorn to finish
// 3. Pour drinks for everyone

// Asynchronous
// 1. Put popcorn in the microwave
// 2. Pour drinks for everyone
// 3. Wait for popcorn to finish

// Promise states:
// -> Pending
// -> Fulfilled
// -> Rejected

// Setup Movie Night //

// Cook popcorn
// Pour Drinks
// Start Movie

async function setupMovieNight() {
  await cookPopcorn();
  await pourDrinks();
  startMovie();
}

function cookPopcorn() {
  // some code hee
  return Promise(/* Some Code Here*/);
}
