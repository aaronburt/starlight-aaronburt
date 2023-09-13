---
title: Ipmi-Manager
---

[Link to Github](https://github.com/aaronburt/ipmi-manager)

This was built in typescript to ensure some guardrails while developing. 

## What is ipmi? 

IPMI, short for Intelligent Platform Management Interface, provides a means for individuals to establish a direct, remote connection to a machine at a low level. Typically, this is managed by a distinct controller with hypervisor-level privileges, enabling it to oversee and adjust operations like power status and fan velocity.

## What's this tool for?

The particular type of IPMI I employ is referred to as 'iDRAC,' a creation by Dell intended to complement their server equipment. Although it is feasible to execute power cycling or fundamental commands through the iDRAC control web interface, the process is sluggish due to its rendering method. This essential API is crafted to utilize the ipmitool to seamlessly interface with iDRAC, taking charge of functions that might otherwise be impeded within the user interface.

## Integration?

It's a REST endpoint. In the past, I've utilized a Spring Boot version to incorporate buttons and controls specifically for managing the fans.

## Updates? 

Updating it to add more features or flesh out features isn't something on my to-do list as of right now, primarily because it serves our purposes. 