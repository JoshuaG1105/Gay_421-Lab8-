// index.js
console.log("Index.js is running...");

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const app = express();
const PORT = process.env.PORT || 3000;

// --------------------
// Middleware
// --------------------
app.use(bodyParser.json());
app.use(morgan('dev'));

// --------------------
// MongoDB Connection (modern Mongoose)
// --------------------
mongoose.connect('mongodb://host.docker.internal:27017/mydatabase')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// --------------------
// Swagger Setup
// --------------------
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'API documentation using Swagger',
    },
    servers: [
      { url: `http://localhost:${PORT}` },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      schemas: {
        Item: {
          type: 'object',
          properties: {
            _id: { type: 'string' },
            name: { type: 'string' },
            description: { type: 'string' },
          },
        },
      },
    },
  },
  apis: ['./routes/*.js'], // <-- Path to your route files with JSDoc comments
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// --------------------
// Routes
// --------------------
const itemsRouter = require('./routes/items');
app.use('/items', itemsRouter);

// Simple health check
app.get('/', (req, res) => res.send('OK'));

// --------------------
// Error handler
// --------------------
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Internal Server Error' });
});

// --------------------
// Start the server
// --------------------
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
