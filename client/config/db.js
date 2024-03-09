import mongoose, { connect } from "mongoose";

const URL = `mongodb://127.0.0.1:27017/client-data`;

const connect_db = async () => {
  await mongoose.connect(URL);
  console.log(`connected to database`);
};

export default connect_db;