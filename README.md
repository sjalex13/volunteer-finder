#  Local Volunteer Finder

Local Volunteer Finder is a platform to **find** and **post volunteer opportunities** in your area.  
It connects individuals who want to make a difference with local organizations and initiatives that need support.

---

##  Features

-  Beautiful, welcoming homepage
-  Browse available volunteer opportunities
-  Post new opportunities easily
-  Register as a volunteer
-  Link volunteers to opportunities
-  Vibrant and responsive design
-  Backend built with Node.js, Express, and PostgreSQL
-  Fast frontend using React and Vite

---

##  Tech Stack

- **Frontend:** React, Vite, JavaScript, CSS
- **Backend:** Node.js, Express
- **Database:** PostgreSQL
- **Other Tools:** Git, GitHub

---


##  Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/volunteer-finder.git
cd volunteer-finder
```
### 2. Install Dependencies

```bash
cd server
npm install

cd ../client
npm install
```
### 3. Set Up Environmental variables

```bash
DB_HOST=localhost
DB_USER=your_postgres_username
DB_PASSWORD=your_postgres_password
DB_NAME=your_database_name
DB_PORT=5432
```

### 4. Make sure your PostgreSQL database is running and has these tables

```bash
CREATE TABLE volunteers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  location VARCHAR(100)
);

CREATE TABLE opportunities (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100),
  location VARCHAR(100),
  description TEXT
);

CREATE TABLE volunteer_opportunities (
  volunteer_id INT REFERENCES volunteers(id),
  opportunity_id INT REFERENCES opportunities(id),
  PRIMARY KEY (volunteer_id, opportunity_id)
);
```

### 5. Run the project

```bash
cd server
node server.js

cd client
npm run dev
```

---

## Contributing

Contributions are welcome!
Feel free to open an issue or a pull request to suggest improvements!
