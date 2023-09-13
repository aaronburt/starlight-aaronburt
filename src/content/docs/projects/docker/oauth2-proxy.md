---
title: Dockerized Oauth2-proxy
---

This project provides you with a dockerized zero trust oauth2 gateway that you can use to ensure that your self-hosted content is safeguarded against unexpected outsiders visiting without your desired credential provider being fulfilled.

This project uses oauth2-proxy to supply the gateway solution, this project solely smashes it all in a convenient and simple docker container.

I don't like relying on Cloudflare access to my services and don't want it all hanging out on the internet without something shielding it.

To set up, you need to place a ".env" file into the root directory (next to the Dockerfile). Then you will need to place the suitable credentials to connect to the oauth2 provider of your choosing.

# Get Started

Before jumping in, if you get stuck on anything, use the documentation provided by the oauth2-proxy people themselves from [here](https://oauth2-proxy.github.io/oauth2-proxy/docs/configuration/oauth_provider/)

#### First clone the repo into a folder of your choosing
```
git clone https://github.com/aaronburt/oauth2-proxy-dockerised.git
```

#### Change into the newly cloned directory
```
cd oauth2-proxy-dockerised
```

You will next need a working version of the below env file.

Required contents of the ```.env``` file
```
email_domain=
cookie_secret=
client_id=
client_secret=
upstream=
endpoint_port=
provider
```

Here is an example of mine (with redactions of the important bits). My config is designed for a Google oauth provider. To set up for Google oauth, you will need to follow this [guide](https://developers.google.com/workspace/guides/create-credentials)
```
email_domain="aaronburt.co.uk"
cookie_secret="thisisasecret"
client_id="somethingsomething.apps.googleusercontent.com"
client_secret="secretstring"
upstream="http://192.168.1.111:8080/"
endpoint_port=4180
provider="google"
```

You will also need a ```emails``` (Make sure it has no extensions) file located in the app directory. For every email you want to authorize will need to be on a new line.

Once you have all things in order, then you should be able to run the container with

```
docker compose up -d 
```

---
https://github.com/aaronburt/oauth2-proxy-dockerised