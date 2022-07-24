var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/uscensus";

// MongoClient.connect(url,{
//   useNewUrlParser: true, useUnifiedTopology: true
// }, function(err, db) {
//   if (err) throw err;
//     console.log("Database created!");
//     db.close();
// });

// MongoClient.connect(url,{
//   useNewUrlParser: true, useUnifiedTopology: true
// }, function(err, db) {
//   if (err) throw err;
//     console.log("Database2 created!");
//     db.close();
// });

MongoClient.connect(url,{
  useNewUrlParser: true, useUnifiedTopology: true
}, function(err, db) {

var dbo=db.db("uscensus");
var stats =[
    {
        'city': 'San Juan', 
        'zip': '00926', 
        'state': 'PR', 
        'income': '34781',
        'age': '44'
    },
    {
        'city': 'Corona', 
        'zip': '11368', 
        'state': 'NY', 
        'income': '50797',
        'age': '32'
    },
    {
        'city': 'Chicago', 
        'zip': '60629', 
        'state': 'IL', 
        'income': '42019',
        'age': '31'
    },
    {
        'city': 'El Paso', 
        'zip': '79936', 
        'state': 'TX', 
        'income': '54692',
        'age': '31'
    },
    {
        'city': 'Los Angeles', 
        'zip': '90011', 
        'state': 'CA', 
        'income': '36954',
        'age': '28'
    },
    {
        'city': 'Norwalk', 
        'zip': '90650', 
        'state': 'CA', 
        'income': '66453',
        'age': '35'
    }
]

var statstwo =[
    {
        'city': 'Pacoima', 
        'zip': '91331', 
        'state': 'CA', 
        'income': '60360',
        'age': '33'
    },
    {
        'city': 'Ketchikan', 
        'zip': '99950', 
        'state': 'AK', 
        'income': '00000',
        'age': '00'
    }
]


//   if (err) throw err;
//     console.log("Database2 created!");
//     db.close();
// });

//  dbo.collection("uscensus").insertMany(stats, function(err,res){
//   if(err) throw err;
//   console.log("number of document inserted");
//   db.close();
  

//   dbo.collection("uscensus").insertMany(statstwo, function(err,res){
//   if(err) throw err;
//   console.log("number of document inserted:2");
//   db.close();

//   var searchs = {city:"Corona"};
// dbo.collection("uscensus").find(searchs).toArray(function(err,result){
//   if (err) throw err;
//   console.log(result);
//   db.close();

//   })

//    var incomesearch = {state:"CA"};
// dbo.collection("uscensus").find(incomesearch).toArray(function(err,result){
//   if (err) throw err;
//   console.log(result);
//   db.close();

// })


// var myquery ={state:"Alaska"};
// var newvalues={$set:{income:"38910", age: "46"}};
// dbo.collection("customers").updateOne(myquery, newvalues, function(err, res){
//   if (err) throw err;
//   console.log("document for Alaska income & age updated");
//   db.close();
// })


var mysort ={ state:1 };
dbo.collection("uscensus").find().sort(mysort).toArray(function(err,result){
  if (err) throw err;
  console.log(result);
  db.close()
})

});
