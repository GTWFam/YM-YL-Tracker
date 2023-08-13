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
        console.log("Couldn't connect to DB");
        res.redirect("/dashboard");
    } else {
        let users = await collection.find({uniqueId: req.query.uniqueId}).toArray();
        if (users.length > 0) {
            console.log("============== User Entries ==============")
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

db.post("/addEntry", async (req, res) => {
    console.log("============== Entry Addition ==============")
    console.log(req.body);
    let date = Date.parse(req.body.datetime + " GMT-04:00");
    let subcategory = req.body.isAspiration ? "Aspiration: " + req.body.subcategory : req.body.subcategory;
    let users = await collection.find({uniqueId: req.body.uniqueId }).toArray();
    let userEntries = users[0].entries;
    let newEntry = {
        datetime: date,
        category: req.body.category ? req.body.category : null,
        subcategory: subcategory ? subcategory : null,
        dollars: parseFloat(req.body.dollars),
        lifeEnergy: parseFloat(req.body.lifeEnergy),
        isIncome: req.body.isIncome ? req.body.isIncome : false,
        q1: req.body.q1 ? parseInt(req.body.q1) : null,
        q2: req.body.q2 ? parseInt(req.body.q2) : null,
        q3: req.body.q3 ? parseInt(req.body.q3) : null
    }
    console.log("============== New Entry ==============")
    console.log(newEntry);
    userEntries.push(newEntry);

    try {
        collection.updateOne(
            { uniqueId: req.body.uniqueId },
            { $set: { entries: userEntries } }
        );
        console.log("Successfully added entry!")
        return res.redirect("/dashboard");
    } catch (e) {
        console.log("Failed to add an entry!")
        return res.redirect("/dashboard");
    }
})

module.exports = db;