# mongoose-light 🚀

Simplify your MongoDB connections with Mongoose using just one line of code, while maintaining full access to Mongoose functionality!

## Installation

Install the package using npm:

```bash
npm install mongoose-light
```

Or using yarn:

```bash
yarn add mongoose-light
```

## Usage

1. Import the `initializeMongoDb` function and `mongoose` from the package:

```javascript
import { initializeMongoDb, mongoose } from 'mongoose-light';
```

2. Call the `initializeMongoDb` function with your database configuration:

```javascript
initializeMongoDb({
  databaseUrl: process.env.DATABASEURL,
  service: process.env.SERVICE,
});
```

3. Use `mongoose` as you normally would for defining schemas, models, etc.

## Configuration

The `initializeMongoDb` function accepts an object with the following properties:

- `databaseUrl` (string): The URL of your MongoDB instance.
- `service` (string): The name of your database service.

## Example

```javascript
import { initializeMongoDb, mongoose } from 'mongoose-light';

// Connect to MongoDB
initializeMongoDb({
  databaseUrl: 'mongodb://localhost:27017',
  service: 'myapp',
});

// Define a schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

// Create a model
const User = mongoose.model('User', userSchema);

// Use the model
const newUser = new User({ name: 'John Doe', email: 'john@example.com' });
newUser.save();
```

## Features ✨

- Simple one-line connection to MongoDB
- Exports the `mongoose` object, allowing you to use all Mongoose features
- Automatic connection error handling
- Console logging for successful connections

## Dependencies

- mongoose: ^5.x.x

## Why mongoose-light? 🤔

mongoose-light simplifies the process of connecting to MongoDB using Mongoose, while still providing full access to the Mongoose library. This allows you to:

1. Quickly set up your database connection with minimal code
2. Continue using Mongoose exactly as you're used to
3. Keep your codebase clean and maintainable

## License

MIT

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/yourusername/mongoose-light/issues).

## Show your support

Give a ⭐️ if this project helped you!

## Questions or Support

If you have any questions or need support, please [open an issue](https://github.com/yourusername/mongoose-light/issues) on our GitHub repository.