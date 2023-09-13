---
title: Password Pusher 
date: 2023-08-05T22:51:07+0000
---

## Written in Spring-Boot

This was roughly implemented, im not a UX person so the design could be seriously improved

<video src="https://storj.aaronburt.co.uk/1691163323/brave_GxAgdTuyOu.mp4" width="100%" controls="true"></video>

Have you ever been in that situation where you need to send someone a password but don’t want to say it out loud or 
send it in plaintext over a messaging service that you know isn’t the most secure? 
PW Pusher is designed to solve that problem. It's designed to be a temporary location for a password at a time. 

Dependencies
- Spring Boot DevTools
- Spring Web
- Mustache
- H2 Database
- MySQL Driver (Subject to change)


### Zero Knowledge
ZK (Zero Knowledge) represents the concept of implementing robust measures to prevent myself or any potential threat from accessing and compromising your data. 
PWPush will utilise multiple encryption layers to ensure user data remains well-protected and inaccessible to unauthorised parties.

### Layer one | Client Side 
The initial layer, L1, is responsible for processing the user's content when they choose to encrypt it with a "password" in their browser. 
However, users have the option to forgo using a password, either for convenience or because they feel the additional security measure is unnecessary for the content they are sharing.

### Layer Two | Server Side
L2 serves as the secondary layer encompassing L1, specifically intended for encrypting the content through the widely used PBKDF (Password-Based Key Derivation Function), 
which is commonly employed by password managers. The URL consists of two components in this representation, though its format might undergo changes in the actual implementation.

The "master password" is a randomly generated, secure string produced by the server. It is a unique key that will be disclosed to you only once, 
precisely at the time of link generation. On the other hand, the "ID" serves as the identifier for locating the corresponding data in the database, 
and it is the part of the URL that gets stored in the database.

### Example database table
This is the current mock-up of the database table columns.

- The table will have an ID, which is a UUID and serves as a unique primary key.
- TimeCreated indicates the content's creation time in ISO8601 format, based on a specific location.
- ExpireTime represents either the user-defined expiry time or a default value of 7 days after TimeCreated. MaxViews specifies the maximum number of views the link can have before the system automatically deletes the record.
- LayerOne is a flag that determines whether the user has enabled layer one encryption. This information is crucial as it dictates whether the layer one decryption function should be rendered on the client side.
- HashedIp is the result of applying the sha256/sha512 (yet to be decided) hash function to the uploader IP address. This enables us to identify and take action against spammers submitting content to the database.
- The Content field contains the actual user-submitted content, which could be either encrypted or plaintext. It will be wrapped in L2 and then submitted to the database.

All the data in this database is retained only for the necessary duration; I have no interest or intention to access or store your passwords.

### Regarding potential future features

User system: One possible idea is to create a mini password manager that allows users to share the same link with multiple people.

Off-Site L1: An interesting concept involves exposing the API, enabling users to self-host their front-end with their L1 encryption. This approach ensures that even in a worst-case scenario where the server is attacked and compromised, the client-side code remains intact and unaltered.

Self-Host Server: Instead of relying on our servers, users could opt to self-host the application on their local network, eliminating concerns about trusting external server locations and reducing worries.

Subscription Service: It is worth noting that I have no plans to monetize this application through a subscription service. Any potential monetization might be limited to accepting donations to cover server costs, ensuring that essential features remain accessible to all users without arbitrary restrictions.

The primary goal is to provide a reliable and secure service without compromising user experience or imposing unnecessary financial burdens.