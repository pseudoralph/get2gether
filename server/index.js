const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({ database: 'get2gether' });

app.use(cors());

app.post('/create/:location', (request, response, next) => {
  const locationId = request.params['location'];
  const addLocationSchema = (loc, user = 'null') => {
    return `INSERT INTO meetups(meetup_uid, createed_by_id) VALUES('${loc}', '${user}')`;
  };

  if (locationId.length == 8) {
    pool.query(addLocationSchema(locationId, 'ralph'), (err, res) => {
      if (res && res.rowCount) {
        response.sendStatus(201)
      } else response.send('unable to add row');
    });
  } else {
    response.sendStatus(400)

    // response.send('invalid location id');
  }
});

app.get('/:location', (request, response, next) => {
  const locationId = request.params['location'];
  const lookupSchema = loc => {
    return `SELECT * from meetups WHERE meetup_uid = '${loc}'`;
  };

  pool.query(lookupSchema(locationId), (err, res) => {
    if (res && res.rowCount && res.rows) {
      response.send(res.rows);
    } else response.send('0 results');
  });
});

app.listen(3001);
