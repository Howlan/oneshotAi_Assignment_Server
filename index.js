// db link
// mongodb://localhost:27017/<db_name>?readPreference=primary&appname=MongoDB%20Compass&ssl=false

const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
const CollgModel = require('./models/Colleges')
const StudentModel = require('./models/students')
const mongoose = require('mongoose')
require('dotenv').config();

mongoose.connect('mongodb+srv://rick:Rick@1999@oneshot-ai-backend.m3iuo.mongodb.net/oneshotAi?retryWrites=true&w=majority',
                {useNewUrlParser : true}
);

app.post('/addCollege', async (req, res) => {
  
    const name = req.body.name;
    const id = req.body.id;
    const city = req.body.city;
    const noOfStudents = req.body.noOfStudents;
    const state = req.body.state;
    const country = req.body.country;
    const courses = req.body.course;
    const yearFounded = req.body.yearFounding;

    const College = new CollgModel({
        id : id,
        name : name,
        yearFounded : yearFounded,
        city : city,
        state : state,
        country : country,
        numberOfStudents : noOfStudents,
        courses : courses });
    await College.save()
    res.send('Inserted Data');
});


app.get("/readCollege", async (req, res) => {
    CollgModel.find({}, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  });

app.get("/readStudent", async (req, res) => {
  StudentModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});



app.listen(process.env.PORT || 3001, () => {
    console.log("Connected!")
})