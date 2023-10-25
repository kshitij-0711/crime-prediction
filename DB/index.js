const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username:String,
  password:String
});

const crimeSchema = new Schema({
  State: String,
  Year: Number,
  Data: {
    Population: Number,
    Rates: {
      Property: {
        All: Number,
        Burglary: Number,
        Larceny: Number,
        Motor: Number,
      },
      Violent: {
        All: Number,
        Assault: Number,
        Murder: Number,
        Rape: Number,
        Robbery: Number,
      },
    },
    Totals: {
      Property: {
        All: Number,
        Burglary: Number,
        Larceny: Number,
        Motor: Number,
      },
      Violent: {
        All: Number,
        Assault: Number,
        Murder: Number,
        Rape: Number,
        Robbery: Number,
      },
    },
  },
});



const crimeModel = mongoose.model('crime rate prediction', crimeSchema);
const userModel = mongoose.model('user',userSchema);


module.exports ={
    crimeModel,
    userModel
}