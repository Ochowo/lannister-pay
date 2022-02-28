### README

An NGN (Nigerian Naira) fee processing service for a fictional Payment Processor (LannisterPay).


#### API Deployment
Api is deployed [here](hhttps://lannister-pay00.herokuapp.com)

#### Required Features
 * Create a fee. 
 * Compute transaction fee.
 
#### Technologies Used
* Nodejs
* Redis

#### Getting Started
* Install Nodejs on your computer
* Clone this repository using git clone https://github.com/Ochowo/lannister-pay.git
* Run npm install to install all dependencies
* Run `redis-server` to start the redis server
* Run `npm run dev` to start the app
* Navigate to localhost:8000 in browser to access the application

#### Available Endpoints
* `/api/v1/fee` - create fee
* `/api/v1/compute-transaction-fee` - compute transaction fee

