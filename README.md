# Project Title

Privete Blockchain RESTful API with Node.js Framework.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

```
# LevelDB
# Crypto.js
# Express.js
# Body-parser
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
npm install
```

## Running the tests

```
node api.js
```

Open browser to http://localhost:8000/block/0 to see the 0th block information. You can then replace the "0" with any other positive integer that's equal or less than the current block height.

You can use Postman to send GET or POST requests to test the API's functionality. Please refer to the API docs below.

### API

All data is in JSON format, and expects body for POST to be in JSON as well.
Method Route Description
GET /block/:index Get information of a single block.
POST /block Add a new block to the blockchain.

## Built With

- [ExpressJS](https://github.com/expressjs/express) - The web framework used
- [NodeJS](https://nodejs.org/en/) - Runtime Environment
- [CryptoJS](https://github.com/brix/crypto-js) - JavaScript library of cryptography standards

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

Mohamed Omar

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc
