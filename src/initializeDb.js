import mongoose from "mongoose";

mongoose.Promise = global.Promise;

class InitializeDb {
  async initializeMongoDb({ databaseUrl, service = "" }) {
    try {
      const servicePath = service ? `/${service}` : "";
      await mongoose.connect(`${databaseUrl}${servicePath}`, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      });
      console.log("[mongodb] DB connected successfully");
    } catch (error) {
      console.error("[mongodb] Connection error:", error);
    }
  }
}

const initializeDb = new InitializeDb();

export const initializeMongoDb = ({ databaseUrl, service }) =>
  initializeDb.initializeMongoDb({ databaseUrl, service });
