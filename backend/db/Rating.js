const mongoose = require("mongoose");

let schema = new mongoose.Schema(
  {
    category: {
      type: String,
      enum: ["job", "applicant"],
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    rating: {
      type: Number,
      max: 5.0,
      default: -1.0,
      validate: {
        validator: function (v) {
          return v >= -1.0 && v <= 5.0;
        },
        msg: "Invalid rating",
      },
    },
  },
  { collation: { locale: "en" } }
);

schema.index({ category: 1, receiverId: 1, senderId: 1 }, { unique: true });   //Indexes are used to optimize database queries and make them faster. An index on a field means that the database will store a separate data structure that maps the values of that field to the documents that contain them. When a query is executed that filters or sorts based on that field, the database can use the index to quickly find the relevant documents.


module.exports = mongoose.model("ratings", schema);
