const express = require("express");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  UserName: {
    type: String,
    required: true,
  },
  UserId: {
    type: String,
    required: true,
  },
  FullName: {
    type: String,
    required: true,
  },
  AccessHash: {
    type: String,
    required: true,
  },
  Groups: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Group",
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
