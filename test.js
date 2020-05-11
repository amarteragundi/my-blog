const mongoose = require("mongoose");
const BlogPost = require("./models/BlogPost");

mongoose.connect("mongodb://localhost/my_database", { useNewUrlParser: true });

// BlogPost.create(
//   {
//     title: "New Title",
//     body: "New body of the new post",
//   },
//   (err, blogpost) => {
//     console.log(err, blogpost);
//   }
// );

// BlogPost.find({}, (err, blogpost) => console.log(err, blogpost));

// BlogPost.findByIdAndUpdate(
//   "5eb8b451c12889633fee8521",
//   {
//     title: "updated title",
//   },
//   (err, blogpost) => console.log(err, blogpost)
// );

BlogPost.findByIdAndDelete("5eb8b4ea06096664859a0829", (err, blogpost) =>
  console.log(err, blogpost)
);
