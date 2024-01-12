module.exports = {
    multiMongooseToObject: function Mongooses(mongoose) {
        return mongoose.map(mongoose => mongoose.toObject());
    },
    mongooseToObject: function Mongoose(mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
}