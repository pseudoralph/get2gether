const express = require('express');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({ database: 'get2gether' });

app.post('/create/:location', (request, response) => {
  const locationId = request.params['location'];

  const addLocationSchema = (loc, user = 'null') => {
    return `INSERT INTO meetups(meetup_uid, createed_by_id) VALUES('${loc}', '${user}')`;
  };

  if (locationId.length == 8) {
    pool.query(addLocationSchema(locationId, 'ralph'), (err, res) => {
      if (res && res.rowCount) {
        response.send(`${res['rowCount']} row added`);
      } else response.send('unable to add row');
    });
  } else {
    response.send('invalid location id');
  }
});

app.get('/:location', (request, response) => {
  const locationId = request.params['location'];

  pool.query(
    `SELECT * from meetups WHERE meetup_uid = ${locationId}`,
    (err, res) => {
      console.log(res);
      // response.send(res);
    }
  );
});

app.listen(3001);
