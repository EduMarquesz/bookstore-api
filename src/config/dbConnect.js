import mongoose from "mongoose";

mongoose.connect("mongodb://admin:123@127.0.0.1:27017/mongo_teste", {
    authSource: 'admin',
});

let db = mongoose.connection;

export default db;