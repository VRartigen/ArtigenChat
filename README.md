## Running the application locally
  The application uses [Node.js](http://nodejs.org/) and [npm](https://www.npmjs.com/), so you must download and install them as part of the following steps.
  
  You must also have a bluemix account and service instances created and bound to an application in order to obtain credentials..

  1. Copy the `username`, `password`, and `url` credentials from your Dialog and Speech services in Bluemix. To see the credentials, run the following command, where `<application-name>` is the unique name you specified:
    
    ```sh
    $ cf env <application-name>
    ```
   The following example shows credentials for the Dialog service:

    ```sh
    System-Provided:
    {
    "VCAP_SERVICES": {
      "dialog": [{
          "credentials": {
            "url": "<url>",
            "password": "<password>",
            "username": "<username>"
          },
        "label": "dialog",
        "name": "dialog-service",
        "plan": "standard"
     }]
    }
    }
    ```
  
    Copy these credentials into your code:
    
    * The Dialog credentials go into `app.js`.
    * The Speech to Text credentials go into `stt-token.js`.
    * The Text to Speech credentials go into `tts-token.js`.
  
  2. Go to the project folder in a terminal and run the `npm install` command.
  3. Start the application by running `node app.js`.
  4. Open `http://localhost:3000` to see the running application.


