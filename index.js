var db = require('./models')

// ------------------------- //
// Create a post
// ------------------------- //
// db.post.findOrCreate({
//   where: {
//     title: "Taco",
//     body: "These things are delicious",
//     authorName: "Reno"
//   }
// }).spread(function(post, created) {
//   console.log(post.get());
// });


// ------------------------- //
// Add a unique tag to post
// ------------------------- //
// db.post.findOne().then(function(post) {
//   // console.log(post.get());
//   db.tag.findOrCreate({
//     where: {name: "food"}
//   }).spread(function(tag, created) {
//     post.addTag(tag).then(function(tag) {
//       console.log(tag, "added to", post.get());
//     })
//   })
// });


// ------------------------- //
// Get all posts that use a tag
// ------------------------- //

// db.tag.find({
//   where: {name: "food"}
// }).then(function(tag) {
//   tag.getPosts().then(function(posts) {
//     console.log("------------------------------------");
//     console.log("These posts are tagged with " + tag.name + ":");
//     posts.forEach(function(post) {
//       console.log("Post title: " + post.title);
//     })
//   })
// })