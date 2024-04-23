const express = require('express')
const cors = require('cors')
const dotenv = require("dotenv");
const mysql = require('mysql2/promise');
const Ajv = require("ajv")
const ajv = new Ajv()

const schema = {
    "type": "object",
    "properties": {
        "title": {
            "type": "string"
        },
        "completed": {
            "type": "integer"
        }
    },
    "required": [
        "title",
        "completed"
    ]
}

const validate = ajv.compile(schema)

dotenv.config();
const app = express();
app.use(cors());

// Variante 2
//Zugriff auf Body des Request wir wollen nur JSON am Anfang des Dokuments!!
app.use((req, res, next) => {
    express.json()(req, res, err => {
      if (err) {
        return res.status(400).send({
          message: "Could not parse JSON"
        });
      }
      next();
    })
});  

app.use(express.urlencoded({extended : true}))

// Create an async pool object with promisified methods
const pool = mysql.createPool({
    connectionLimit: 100,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

async function query(sql, params) {
    try {
        const [rows, fields] = await pool.execute(sql, params);
        return rows;
    } catch (error) {
        throw error;
    }
}
// Function to check the connection
async function checkConnection() {
    try {
        // Execute a simple query to check the connection
        await pool.query('SELECT 1');
        console.log('Connected to the MySQL server.');
    } catch (err) {
        console.error('Error connecting to MySQL server:', err);
    } finally {
        // Close the connection pool
    }
}

// Call the function to check the connection
checkConnection();

app.get('/todos', async function (req, res) {
  try {
      const sql = "SELECT * FROM todos";
      var todos = await query(sql);
      console.log(todos);
      if (todos.length == 0) {
          res.status(404).json({
              status: 404,
              message: "keine Todos gefunden"
          });
          return;
      }
      //console.log(todos);
      var row = todos.length;
      res.status(200).json({
          status: 200,
          todos,
          row
      });
      return;
  } catch (err) {
      res.status(500).send({
          status: 500,
          message: err
      });
  }
  return;
});

app.post('/todos', async function (req, res) {
    console.log("inside");
    let data = req.body;
    let isValid = validate(data);
    console.log("is valid:", isValid);

    if (isValid){
        try {
            const sql = "INSERT INTO todos (title, completed) values(?,?)";
            var todos = await query(sql,[data.title,data.completed]);
            console.log("todos.",todos);
            if (todos.length == 0) {
                res.status(404).json({
                    status: 404,
                    message: "keine Todos gefunden"
                });
               return;
            }
            //console.log(todos);
            var row = todos.length;
            res.status(200).json({
                status: 200,
                todos,
                row
            });
            return;
        } catch (err) {
            console.log("error",err);
            res.status(500).send({
                status: 500,
                message: err
            });
        }
        return res.send();
    }
    else {
        console.log("We have a problem");
        console.log(validate.errors)
        res.send("invalid data")
    }
});

app.put('/todos/:id', async function (req, res) {
    console.log("inside");
    let data = req.body;
    let isValid = validate(data);
    console.log("is valid:", isValid);

    if (isValid){
        try {
        const sql = "UPDATE todos SET title = ?, completed = ? WHERE id = ?";
        var todos = await query(sql,[data.title,data.completed,req.params.id]);
        console.log(todos);
        if (todos.length == 0) {
            res.status(404).json({
                status: 404,
                message: "keine Todos gefunden"
            });
           return;
        }
        //console.log(todos);
        var row = todos.length;
        res.status(200).json({
            status: 200,
            todos,
            row
        });
        return;
    } catch (err) {
        console.log("error",err);
        res.status(500).send({
            status: 500,
            message: err
        });
    }
    return res.send();
}
else {
    console.log("We have a problem");
    console.log(validate.errors)
    res.send("invalid data")
}
});

app.delete('/todos/:id', async function (req, res) {
  try {
      const body = req.body;
      const sql = "DELETE FROM todos WHERE id = ?";
      var todos = await query(sql,[req.params.id]);
      console.log(todos);
      if (todos.length == 0) {
          res.status(404).json({
              status: 404,
              message: "keine Todos gefunden"
          });
          return;
      }
      //console.log(todos);
      var row = todos.length;
      res.status(200).json({
          status: 200,
          todos,
          row
      });
      return;
  } catch (err) {
      res.status(500).send({
          status: 500,
          message: err
      });
  }
  return;
});

app.get('/',(req, res)=>{
    res.send("Hallo")
})

///Zugriffe auf Pfade mit : 
// Apfrage mit Parameter  /hello?name=xxx
app.get('/hello', (req, res) => {
    res.send("hallo mein query ist:" + req.query.name);
  });
  // Abfrage mit Platzhalter in /hello/markus
  app.get('/hello/:name', (req, res) => {
    console.log(req.params.name);
    res.send("hallo mein Name ist auch " + req.params.name);
  });
  
// Abfrage mit Platzhalter in /hello/markus
app.post('/hello/body', function (req, res) {
    console.log(req.body);
    res.send(req.body);
  });
  
app.listen(3000, () => console.log("Example REST started"))

