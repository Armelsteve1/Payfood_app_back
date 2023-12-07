const connectToMongoDB = require('./mongoConnection');
// const User = require('./models/users');

async function run() {
  try {
    const client = await connectToMongoDB();
    console.log('connexion ok',client)
  } catch (error) {
    console.error("Error in main application:", error);
  }
  // try {
  //   const allUsers = await User.find();
  //   console.log("Tous les utilisateurs:", allUsers);

  // } catch (error) {
  //   console.error("Error in main application:", error);
  // } finally {
  //   if (client) {
  //     await client.close();
  //   }
  // }
}

run().catch(console.dir);
