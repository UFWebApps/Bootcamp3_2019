//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb+srv://Mholt:1234@cluster0-o8mj8.mongodb.net/test?retryWrites=true&w=majority'//place the URI of your mongo database here.
  }, 
  openCage: {
    key: '1bf9179151fc4f669f8b403be340a57f' //place your openCage public key here - Sign-up for a free key https://opencagedata.com/
  },
  port: 8080
};