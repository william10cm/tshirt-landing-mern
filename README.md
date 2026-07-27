# T-Shirt Landing MERN Stack

A full-stack e-commerce application for a T-shirt landing page built with the MERN stack (MongoDB, Express, React, Node.js).

## 🎯 Features

- **Product Catalog** - Browse and view detailed information about T-shirt products
- **Shopping Cart** - Add/remove items from cart with persistent storage
- **Product Details** - View comprehensive product information with images
- **Responsive Design** - Mobile-friendly UI built with React and Vite
- **RESTful API** - Backend API for product management and cart operations

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS** - Styling

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM

## 📁 Project Structure

```
tshirt-landing-mern2/
├── backend/
│   ├── models/
│   │   └── Product.js          # MongoDB Product schema
│   ├── routes/
│   │   └── productRoutes.js    # Product API endpoints
│   ├── package.json
│   └── server.js               # Express server setup
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   └── ProductCard.jsx # Product card component
│   │   ├── pages/
│   │   │   ├── Home.jsx        # Homepage
│   │   │   ├── CartPage.jsx    # Shopping cart page
│   │   │   └── ProductDetails.jsx # Product detail page
│   │   ├── utils/
│   │   │   └── cart.js         # Cart utilities
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/                 # Static assets
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── eslint.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas connection)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tshirt-landing-mern2
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../client
   npm install
   ```

### Environment Variables

Create a `.env` file in the `backend/` directory:

```
MONGODB_URI=<your-mongodb-connection-string>
PORT=5000
NODE_ENV=development
```

Create a `.env.local` file in the `client/` directory:

```
VITE_API_URL=http://localhost:5000
```

### Running the Application

#### Backend Server
```bash
cd backend
npm start
```
The server will run on `http://localhost:5000`

#### Frontend Development Server
```bash
cd client
npm run dev
```
The frontend will run on `http://localhost:5173` (or the port Vite specifies)

### Building for Production

#### Frontend Build
```bash
cd client
npm run build
```

#### Backend Deployment
Deploy the `backend/` folder to your hosting platform (Heroku, AWS, etc.)

## 📝 API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create new product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)

## 🎨 Components

### ProductCard
Displays individual product cards with image, name, and price. Includes add-to-cart functionality.

### Home Page
Landing page showcasing the product catalog with filtering and sorting options.

### ProductDetails
Detailed view of a single product with full specifications and add-to-cart options.

### CartPage
Shopping cart display with item management and checkout functionality.

## 📦 Dependencies

### Backend
- express
- mongoose
- cors
- dotenv

### Frontend
- react
- react-router-dom (if routing is used)
- axios (for API calls)

## 🔧 Development

### Linting
```bash
cd client
npm run lint
```

### Code Style
This project follows ESLint configuration as defined in `client/eslint.config.js`

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please follow the existing code style and submit pull requests for any improvements.

## 📧 Support

For questions or issues, please open an issue in the repository or contact the project maintainers.
