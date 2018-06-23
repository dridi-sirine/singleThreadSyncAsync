### Download & Run Wiremock

    wget http://repo1.maven.org/maven2/com/github/tomakehurst/wiremock-standalone/2.18.0/wiremock-standalone-2.18.0.jar
    java -jar wiremock-standalone-2.18.0.jar
    
Wiremock is running on http://localhost:8080
To create mocks you have to POST http://localhost:8080/__admin/mappings the following body structure

    {
        "request": {
            "method": "GET",
            "url": "/google/api/geo"
        },
        "response": {
            "status": 200,
            "fixedDelayMilliseconds": 5000,
            "body": "-34.397,150.644"
        }
    }
    
### Import Postman json collection

    ./NODE.JS SINGLE THREAD - SYNC-ASYNC.postman_collection

### Install Node.js dependencies

    npm install
    
### Run application
    
    node app.js
    
You should see the following input

    Starting app
    BLOCKING - sync-request:  -34.397,150.644
    finishing app
    SIMULATE NON-BLOCKING - Second timeout
    SIMULATE NON-BLOCKING - Inside a callback
    NON-BLOCKING - REQUEST callback:  -34.397,150.644
    NON-BLOCKING - async/await:  -34.397,150.644
    NON-BLOCKING - callback:  -34.397,150.644
    NON-BLOCKING - Callback to async/await:  -34.397,150.644
    NON-BLOCKING - Callback to promise:  -34.397,150.644
    NON-BLOCKING - Promise:  -34.397,150.644