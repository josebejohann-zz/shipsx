import fs from 'fs';
import csv from 'csv-parser';

import writeDataToCSV from './writeDataToCSV';
import { Ship } from '../types/Ship';

const ships: Ship = [];

async function readCSVFile() {
  await writeDataToCSV();

  fs.createReadStream('/tmp/ships.csv')
    .pipe(csv({}))
    .on('data', (row) => {
      const ship = {
        name: row.ship,
        missions: row.missions.split(';'),
      };

      ships.push(ship);
    })
    .on('end', () => {
      console.table(ships);
    });
}

export default readCSVFile;
