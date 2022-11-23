const mongoose = require("mongoose");

const Room = new mongoose.Schema({
  user_id: { type: String, required: true },
  number_of_persons: { type: Number },
  number_of_nights: { type: Number },
  type_of_room: {
    single_bed: {
      maximum_person: { type: Number, Default: 2 },
      cost: { type: Number, Default: 700 },
    },
    double_bed: {
      maximum_person: { type: Number, Default: 3 },
      cost: { type: Number, Default: 1200 },
    },
    executive_room: {
      maximum_person: { type: Number, Default: 3 },
      cost: { type: Number, Default: 1400 },
    },
  },
});

module.exports = mongoose.model("rooms", Room);
