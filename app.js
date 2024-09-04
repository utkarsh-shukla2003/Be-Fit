// importing the necessary packages:
const express = require("express"); // nodejs framework helps in hadnliing https requests
const mongoose = require("mongoose"); // node js library helps to interact with mongodb
const bodyParser = require("body-parser");
const path = require("path"); //helps to connect the pages

// configure mongoose
// This connects to a MongoDB database using Mongoose, and logs a message to the console when the connection is successfully
mongoose
  .connect("mongodb://127.0.0.1:27017", {
    //This line connects to the MongoDB database
    dbName: "befit", //database name
  })
  .then(() => console.log("🐨 Mongoose Connected")) //this adds a callback function when the connection is sucess it logs a message
  .catch(() => `🐨 Error while connected to mongoose`); // this line adds a error call back function

//this is for the payment page
//This line defines a new variable Payment and assigns it the result of calling the mongoose.model function.
const Payment = mongoose.model(
  "Payment",
  new mongoose.Schema({
    name: String,
    email: String,
    address: {
      firstLine: String,
      city: String,
      state: String,
      zipCode: Number,
    },
    cardInfo: {
      cardType: String,
      num: String,
      expiryDetails: {
        month: Number,
        year: Number,
      },
      cvv: Number,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  })
);
// this is for Contact page
// this line defines a new variable Contact and assigns it the result of calling the mongoose.model function
const Contact = mongoose.model(
  "Contact",
  new mongoose.Schema({
    name: {
      firstName: String,
      lastName: String,
    },
    email: String,
    phone: String,
    message: String,
  })
);

const app = express();

// configure express
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

// this define routes conecting different pages
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "index.html"));
});

app.get("/our-services", (_, res) => {
  res.sendFile(path.join(__dirname, "pages", "our-services.html"));
});

app.get("/plans", (_, res) => {
  res.sendFile(path.join(__dirname, "pages", "plans.html"));
});

app.get("/success", (_, res) => {
  res.sendFile(path.join(__dirname, "pages", "successful.html"));
});
app.get("/error", (_, res) => {
  res.sendFile(path.join(__dirname, "pages", "error.html"));
});

app
  .route("/register")
  .get((_, res) => {
    res.sendFile(path.join(__dirname, "pages", "contact.html"));
  })
  .post(async (req, res) => {
    const { firstName, lastName, email, phone, message } = req.body;
    try {
      await new Contact({
        name: { firstName, lastName },
        email,
        phone,
        message,
      }).save();
      res.redirect("/success");
    } catch (err) {
      console.log(err);
      res.redirect("/error");
    }
  });

app
  .route("/payment")
  .get((_, res) => {
    res.sendFile(path.join(__dirname, "pages", "payment.html"));
  })
  .post(async (req, res) => {
    const {
      name,
      email,
      address,
      city,
      state,
      zip,
      cardName,
      cardNumber,
      expMonth,
      expYear,
      cvv,
    } = req.body;

    try {
      // this save new payment to database
      await new Payment({
        name,
        email,
        address: {
          firstLine: address,
          city,
          state,
          zipCode: +zip,
        },
        cardInfo: {
          cardType: cardName,
          num: cardNumber,
          expiryDetails: {
            month: +expMonth,
            year: +expYear,
          },
          cvv: +cvv,
        },
      }).save();
      // on successful payment redirect to successful page
      res.redirect("/success");
    } catch (err) {
      // in case of error, render error page
      res.redirect("/error");
    }
  });

// Start the server
const port = 5000;
app.listen(port, () =>
  console.log(`🚨 Server running on http://localhost:${port}/`)
);
