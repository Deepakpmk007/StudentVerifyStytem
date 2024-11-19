const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { GridFsStorage } = require("multer-gridfs-storage");
const { GridFSBucket } = require("mongodb");

dotenv.config({ path: "./config.env" });
const app = require("./app");

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected 🔥🔥"));
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB connection established.");
});

let gfsBucket;
connection.once("open", () => {
  console.log("MongoDB connected.");
  gfsBucket = new GridFSBucket(connection.db, {
    bucketName: "uploads", // Name of the GridFS bucket
  });
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
