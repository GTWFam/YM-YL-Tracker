const db = require("express").Router();
const { MongoClient, ServerApiVersion } = require('mongodb');
const ObjectId = require("mongodb").ObjectId;

const uri = 
    "mongodb+srv://" + 
    process.env.DB_USER + 
    ":" + 
    process.env.DB_PASS + 
    "@" + 
    process.env.DB_HOST + 
    "/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    serverApi: ServerApiVersion.v1 
});

let collection = null;
client
    .connect()
    .then(err => {
        return client.db("YM_YL").collection("Users");
    })
    .then((__collection) => {
        collection = __collection;
    })
    .catch(err => {
        console.log(err)
    })

db.get('/getUserEntries', async (req, res) => {
    console.log(req.query);
    if (collection === null) {
        alert("Couldn't connect to DB");
        res.redirect("/dashboard");
    } else {
        let users = await collection.find({uniqueId: req.query.uniqueId}).toArray();
        if (users.length > 0) {
            console.log(users)
            console.log(users[0].entries)
            res.json({entries: users[0].entries});
        } else {
            try {
                collection.insertOne({
                    uniqueId: req.query.uniqueId,
                    entries: []
                })
                res.json({entries: []})
            } catch (e) {
                console.log("Failed to retireve user's entries: " + e.message);
                return res.redirect("/dashboard");
            }
        }
    }
});
 
module.exports = db;