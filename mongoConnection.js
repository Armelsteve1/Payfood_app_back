// const { MongoClient, ServerApiVersion } = require('mongodb');

// async function connectToMongoDB() {
// //   const uri= "mongodb+srv://marci:nonmaislol@payfood.cqaofhv.mongodb.net/"
//   const uri = "mongodb+srv://marci:nonmaislol@payfood.cqaofhv.mongodb.net/?retryWrites=true&w=majority";
//   const client = new MongoClient(uri, {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//     }
//   });

//   try {
//     await client.connect();
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. Successfully connected to MongoDB!");
//     return client;
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//     throw error;
//   }
// }

// module.exports = connectToMongoDB;


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://marci:nonmaislol@payfood.cqaofhv.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

