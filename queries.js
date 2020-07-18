/* Add all the required libraries*/
import * as fs from 'fs';
import mongoose from 'mongoose';
import Listing from './ListingSchema.js';
import config from './config.js';
import util from 'util';
/* Connect to your database using mongoose - remember to keep your key secret*/
mongoose.connect(config.db.uri,{useNewUrlParser:true});
/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

//const util=require('util');
const findLibraryWest = () => {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
    
    Listing.find({code:'LBW'}).exec(function(err,listing){
      if(err)return handleError(err);
      console.log(util.inspect(listing, {showHidden: false, depth: null}))
    });
    
    
};
const removeCable = () => {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
  Listing.deleteOne({code:'CABL',}).exec(function(err,listing){
    if(err)return handleError(err);
    console.log("Deleted CABL!");
  });
  

};
const updatePhelpsLab = () => {
  /*
    Phelps Lab address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
    
    Correct Address: 1953 Museum Rd, Gainesville, FL 32603

   */
  Listing.findOneAndUpdate({code:'PHL'},{address:'1953 Museum Rd, Gainesville, FL 32603'}).exec(function(err,listing){
    if(err)return handleError(err);
    console.log("Updated Phelps Lab!");
  });
  Listing.find({code:'PHL'}).exec(function(err,listing){
    if(err)return handleError(err);
    console.log(util.inspect(listing, {showHidden: false, depth: null}))
  });
  
  
};
const retrieveAllListings = () => {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
  
  Listing.find().exec(function(err,listing){
    if(err)return handleError(err);
    console.log(util.inspect(listing, {showHidden: false, depth: null}))
  });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
