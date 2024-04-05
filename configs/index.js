const configs = {
  port: process.env.PORT || 3000,
  mongoURI:
    process.env.MONGODB_URI ||
    "mongodb+srv://dephaingabire:praGsgrfB1L5hYIq@cluster0.kzrwejj.mongodb.net/ContactApplication",
  secret: process.env.SECRET || "mysecret",
};

export default configs;