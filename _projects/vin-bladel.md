---
title: Vin Bladel
name: VIN-Bladel
summary: An iOS app to decode VINs powered by the NHTSA API.
mytags: iOS
link: https://github.com/j-koreth/VIN-Bladel
date: 2018-05-30 00:00:00 Z
---

<img src="{{ 'assets/images/Vin-Bladel.png' | relative_url}}">

The iOS app that manages the John Hersey High School Automobile Repair service.
The app utilizes Firebase to store the customers, vehicles, past invoices, and the parts and services offered. A user can scan/type in a car VIN or search a customer by name to bring up the information of an old vehicle or to add a new customer/car to the database. The students doing the repairs have the option to select the maintenance they're doing and send an invoice to the customer's email when the repair is complete. 

## Features
* Scan or manually input a VIN or even look up an old customer by name to pull up their information and their vehicle.
* Uses the [NHTSA API](https://vpic.nhtsa.dot.gov/api/) for VIN Decoding
 * Displays the following keys from the API
   * Make
   * Model 
   * Model Year
   * Displacement
   * Cylinder
   * Transmission
   * Drive type
   * Submodel
   
* Firebase Integration
  * Add a new customer and identify and update a previous customer
  * Add a new customer and identify and update a previous vehicle
  * Look through a vehicle's past maintenance history and update when new reports are made
  

## Installation
Install [Firebase](https://firebase.google.com/docs/ios/setup#add_the_sdk) 

``` sh
git clone https://github.com/j-koreth/VIN-Bladel.git
cd VIN-Bladel
pod init
```

<video width="200" height="400" muted controls>
  <source src="{{ 'assets/files/VIN-Bladel.mp4' | relative_url}}" type="video/mp4">
  Your browser does not support the video tag.
</video>

