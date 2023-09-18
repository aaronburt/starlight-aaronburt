---
title: QR Code Generator API
---

This is an Express.js server inside with docker support that allows you to generate QR codes from a given input string. It utilizes the qrcode and express-rate-limit packages to generate QR codes and limit the rate of requests respectively.

### Docker run
```docker run -p 8080:8080 mrburtuk/qrcode-api```

### Public Example
[Qrcode example](https://qrcode-api.aaronburt.co.uk/qr?input=https://google.com)

<img src="https://qrcode-api.aaronburt.co.uk/qr?input=https://google.com" alt="QR Code for https://google.com"/>

This example may take some time to run as the container may need to wake up first. 

## Features
- Generates QR codes from given input strings
- Implements rate limiting to prevent abuse of the API
- Returns a PNG image of the QR code

<img src="https://storj.aaronburt.co.uk/1694625043/brave_J3z1Cwlzr1.gif" alt="qr code url example"/>

## Usage
1. Make a GET request to the endpoint /qr with a query parameter input containing the string you want to convert to a QR code.

```GET http://localhost:8080/qr?input=example```

2. The server will respond with a PNG image of the QR code.


## Error Responses
- If the input is not a string, the server will return a 400 Bad Request status code.
- If the rate limit is exceeded, the server will return a 429 Too Many Requests status code with a message of "429".

## Note
- The rate limit is set to 5 requests per second by default.
- The server will only handle /qr endpoint, any other endpoint will return a 400 Bad Request status code.

---
https://github.com/aaronburt/qrcode-api