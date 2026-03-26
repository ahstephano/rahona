import mongoose from "mongoose";

const connectToDB = async () => {
    await mongoose
        .connect('mongodb://localhost:27017/project_x')
        .then(console.log("App connected successfully to the DB"))
        .catch((error) => console.error(error));
};

export default connectToDB;

