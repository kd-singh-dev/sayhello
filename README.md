# SayHello
![issue](https://img.shields.io/github/issues/kdsinghcoder/sayhello)
![GitHub language count](https://img.shields.io/github/languages/count/kdsinghcoder/sayhello)
![version](https://img.shields.io/github/package-json/v/kdsinghcoder/sayhello)
![express](https://img.shields.io/github/package-json/dependency-version/kdsinghcoder/sayhello/express)
![mongoose](https://img.shields.io/github/package-json/dependency-version/kdsinghcoder/sayhello/mongoose)
![multer](https://img.shields.io/github/package-json/dependency-version/kdsinghcoder/sayhello/multer)
![passport](https://img.shields.io/github/package-json/dependency-version/kdsinghcoder/sayhello/passport)

> **Hosted: [Click to visit](sa-yhello.herokuapp.com/)**

Say Hello is essentially a speech to sign language converter which takes a speech input from the user and converts it to a text form with the help of a Window's Tool kit followed by which, this text is used as an input to finally convert this speech into sign language. The sign language system we have used in the development of this project is the American Sign Language (ASL).

```
Important Functionalities
Authentication,
Profile Pic changing and uploading using file handling,
Speach recognition using window's tool kit
Storing Speaches in MongoDb database
```

![image](https://user-images.githubusercontent.com/50829119/120904541-69469b00-c66a-11eb-861b-1816362818cc.png)

## Running on Local System

Running the project on local system is **strongly recommended**, even if you are not working on the backend. This is becuase to test the middlewars, client applications, or any other component, an instance of sayhello server is required.

 **Make sure that you have a mongodb instance running.** This step might be different depending on your installation type. If you do not have mongodb database installed, refer [this link](https://docs.mongodb.com/manual/administration/install-community/)

- run cmd `mongod` in command prompt in the root dir of the project 

- Clone the repository to your system using `git clone https://github.com/kdsinghcoder/sayhello`
- Now open the cloned repository using `cd sayhello`
- The project depends on numerous npm packages. Install them using  `npm install`
- Run `npm run start:dev` to launch a development server.
- Open [localhost:5000](http://localhost:5000) and ensure that the server is running.

## System Overview
![image](https://user-images.githubusercontent.com/50829119/123988201-70509700-d9e5-11eb-9def-7f254d6a2a34.png)

## Depencencies 
```
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.19.0",
    "connect-flash": "^0.1.1",
    "dotenv": "^10.0.0",
    "ejs": "^2.6.1",
    "express": "^4.16.4",
    "express-ejs-layouts": "^2.5.0",
    "express-session": "^1.15.6",
    "mongoose": "^5.7.5",
    "multer": "^1.4.2",
    "passport": "^0.4.0",
    "passport-local": "^1.0.0"
```

**Bcrypt.js**
Bcrypt,js is one the most widely used encrypting/decrypting library used to handle sensitive data such as passwords in a software/website. This uses the concept of hashing and then decrypting the generated hash function using a salt(key). Thus, this helps prevent privacy and reduce damage to someone's resources who uses the same password for different websites.

**connect-flash**
The flash is a special area of the session used for storing messages. Messages are written to the flash and cleared after being displayed to the user. The flash is
typically used in combination with redirects, ensuring that the message is available to the next page that is to be rendered. This middleware was extracted from Express 2.x, after Express 3.x removed direct support for the flash. connect-flash brings this functionality back to Express 3.x, as well as any other middleware-compatible framework or
application. +1 for radical reusability.

*Dotenv*
Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. This keeps sensitive details of online data clusters which one is using to connect to the database which contains passwords to that database in many cases.

**Ejs**
EJS is a simple templating language that lets you generate HTML markup with plain JavaScript.

**Express**
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

**Mongoose**
Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.It is designed to work in an asynchronous environment. Mongoose supports both promises and callbacks. 

**Multer**
Multer is a node.js middleware for handling multipart/form-data, which isprimarily used for uploading files. It is written on top of a busboy for maximum
efficiency. In this case Multer is used to handle profile images and also to ensure file deletion once a new profile pic is uploaded.

**Passport**
Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped into any Express-based web application. A comprehensive set of strategies support authentication using a username and password, Facebook, Twitter, and more.

## Page View
![image](https://user-images.githubusercontent.com/50829119/124012430-c7169a80-d9fe-11eb-8558-8aed2f04577d.png)





