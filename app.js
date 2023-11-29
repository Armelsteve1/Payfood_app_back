const admin = require('firebase-admin');
const serviceAccount = require('./firebase.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://payfood-7925c-default-rtdb.europe-west1.firebasedatabase.app",
});


const firebaseAuth = admin.auth();

app.get('/loyalty-points/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const decodedToken = await firebaseAuth.verifyIdToken(req.headers.authorization);
    const uid = decodedToken.uid;
    if (uid !== userId) {
      return res.status(403).json({ error: 'Accès non autorisé' });
    }
    const loyaltyPoints = await LoyaltyPoints.findOne({ userId });
    res.json(loyaltyPoints);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur interne du serveur' });
  }
});
