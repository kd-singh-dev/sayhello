# SayHello
![issue](https://img.shields.io/github/issues/kdsinghcoder/sayhello)
![GitHub language count](https://img.shields.io/github/languages/count/kdsinghcoder/sayhello)
![version](https://img.shields.io/github/package-json/v/kdsinghcoder/sayhello)
![express](https://img.shields.io/github/package-json/dependency-version/kdsinghcoder/sayhello/express)
![mongoose](https://img.shields.io/github/package-json/dependency-version/kdsinghcoder/sayhello/mongoose)
![multer](https://img.shields.io/github/package-json/dependency-version/kdsinghcoder/sayhello/multer)
![passport](https://img.shields.io/github/package-json/dependency-version/kdsinghcoder/sayhello/passport)

Say Hello is essentially a speech to sign language converter which takes a speech input from the user and converts it to a text form with the help of a JavaScript API followed by which, this text is used as an input to finally convert this speech into sign language.


![image](https://user-images.githubusercontent.com/50829119/120904541-69469b00-c66a-11eb-861b-1816362818cc.png)

### Hosted on
 <a href="https://sa-yhello.herokuapp.com/">
  <img src="https://www.herokucdn.com/deploy/button.svg" alt="Open sayhello">
</a>

## Running on Local System

Running the project on local system is **strongly recommended**, even if you are not working on the backend. This is becuase to test the middlewars, client applications, or any other component, an instance of sayhello server is required.

 **Make sure that you have a mongodb instance running.** This step might be different depending on your installation type. If you do not have mongodb database installed, refer [this link](https://docs.mongodb.com/manual/administration/install-community/)

- run cmd `mongod` in command prompt in the root dir of the project 

- Clone the repository to your system using `git clone https://github.com/kdsinghcoder/sayhello`
- Now open the cloned repository using `cd sayhello`
- The project depends on numerous npm packages. Install them using  `npm install`
- Run `npm run start:dev` to launch a development server.
- Open [localhost:5000](http://localhost:5000) and ensure that the server is running.
