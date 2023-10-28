const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost:27017/gofood';

const mongoDB = async () => {

    try {

      await mongoose.connect(mongoURL);

      console.log('Connected!');

      let fetched_data = mongoose.connection.db.collection("food_items");
      let data=await fetched_data.find({}).toArray() 
      global.food_items = data;

      let fetched_catData = mongoose.connection.db.collection("foodCategory");
      let catData=await fetched_catData.find({}).toArray() 
      global.foodCategory = catData;

      //console.log(global.foodCategory)
      // console.log(data);

    } catch (error) {

      console.log('err: ', error);

    }
    // await mongoose.connection(mongoURL, {userNewUrlParser: true}, async(err, result)=>{
    //   if (err) {
    //     console.log("----",err)
    //   }
    //   else {
    //     console.log("conneted")
    //     const fetched_data = await mongoose.connection.db.collection("food_items")
    //     fetched_data.find({}).toArray(function (err, data){
    //       if (err) {
    //         console.log(err)
    //       } else {
    //         global.food_items = data
    //       }
    //     })
    //   }
    // })
    // ======aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    

  };
  module.exports = mongoDB;