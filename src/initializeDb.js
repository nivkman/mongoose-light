import mongoose from "mongoose";

mongoose.Promise = global.Promise;

class InitializeDb {
  async initializeMongoDb({databaseUrl, service}) {
    mongoose.connect(
      `${databaseUrl}/${service}`,
      { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },
      (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("[mongodb] DB connected successfully");
        }
      }
    );
  }
}

const initializeDb = new InitializeDb();

export const initializeMongoDb = (config) => initializeDb.initializeMongoDb(config);
