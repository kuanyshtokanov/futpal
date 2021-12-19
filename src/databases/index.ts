const MONGODB_URI = process.env['MONGODB_URI']

if (!MONGODB_URI) {
  console.log('No mongo connection string. Set MONGODB_URI environment variable.')
  process.exit(1)
}

export const dbConnection = {
  url: MONGODB_URI,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
};
