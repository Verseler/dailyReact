const express = require("express");
const mysql = require("mysql");
const cors = require("cors")
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const app = express();
app.use(cors({
  origin: ["http://localhost:5173"],
  methods: ["POST", "GET"],
  credentials: true
}));
app.use(express.json())
app.use(cookieParser)
app.use(bodyParser.json())
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    maxAge: 1000 * 60 * 60 * 24
  }
}))

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "student"
})

app.post('/signup', (req, res) => {
  const sql = "INSERT INTO user (`username`, `email`, `password`) VALUES (?)";
  const values = [
    req.body.username,
    req.body.email,
    req.body.password
  ]
  db.query(sql, [values], (err, result) => {
    if(err) return res.json({Message: "Error in Node"});

    return res.json(result);
  })
})


app.get('/', (req, res) => {
  if(req.session.username) {
    return res.json({valid: true, username: req.session.username})
  }
  else {
    return res.json({valid: false})
  }
})

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM user WHERE email = ? AND password = ?";
  db.query(sql, [req.body.email, req.body.password], (err, result) => {
    if(err) return res.json({Message: "Error inside server"});
    if(result.length > 0) {
      req.session.username = result[0].username;
      console.log(req.session.username)
      return res.json({Login: true});
    }
    else {
      return res.json({Login: false})
    }
  })
})


app.listen(8081, () => {
  console.log("connected to the server")
})