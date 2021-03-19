# sayhello

## Running on Local System

Running the project on local system is **strongly recommended**, even if you are not working on the backend. This is becuase to test the middlewars, client applications, or any other component, an instance of sayhello server is required.

 **Make sure that you have a mongodb instance running.** This step might be different depending on your installation type. If you do not have mongodb database installed, refer [this link](https://docs.mongodb.com/manual/administration/install-community/)

- run cmd `mongod` in command prompt in the root dir of the project 

- Clone the repository to your system using `git clone https://github.com/kdsinghcoder/sayhello`
- Now open the cloned repository using `cd sayhello`
- The project depends on numerous npm packages. Install them using  `npm install`
- Run `npm run start:dev` to launch a development server.
- Open [localhost:5000](http://localhost:5000) and ensure that the server is running.
