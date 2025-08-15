'this init is a random data generating hub for the collections'

1)data.js:
    ->random data of hotels and stored in the form of array and exported

2)index.js:
    ->the above array is imported ,and listing(class from model) and mongoose imported and the array(data) is inserted into the listing collection (inpresence of (asynchronous): connection with database{wonderlist})
    asynchronously (using async and await) by calling a function