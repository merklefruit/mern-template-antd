# MERN Stack custom template

<img src="./design/mern.jpeg"></img>

**I use this repository as a starter template for my own projects.**
**Feel free to use it on your own.**

## Dependencies

- Backend:
  - Cors
  - Dotenv
  - Express
  - Helmet
  - Morgan
- Frontend:
  - CRA Rewired
  - Ant Design

## Usage

```bash
# Clone repository
git clone https://github.com/nicolas-racchi/mern-template.git
cd mern-template

# Install all dependencies both for client, server and wrapper folder.
cd client && npm install && cd ../server && npm install && cd .. && npm install

```

Then, connect your mongoDB database:
inside the `server` folder, create a file called `.env` and add the DATABASE_URL string.

```bash
# Example (./server/.env)
NODE_ENV=development
DATABASE_URL=my_mongo_connection_string
```

```bash

# Run client & server concurrently
npm run dev

```
