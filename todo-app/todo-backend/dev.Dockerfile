# Start from a Node.js image
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Install nodemon globally
RUN npm install -g nodemon

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the source code
COPY . .

# Start the dev server with nodemon
CMD ["nodemon", "index.js"]
