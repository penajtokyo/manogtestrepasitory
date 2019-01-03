var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArtistSchema = new Schema({
  location: String,
  address: String,
  city: String,
  state: String,
  zip: String,
  price: String,
  specialization: String,
});

var Artist = mongoose.model("Artist", ArtistSchema);

// Export the Library model
module.exports = Artist;