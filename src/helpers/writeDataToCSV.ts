import fs from 'fs';

import parseDataToCSV from './parseDataToCSV';
import { allShips } from '../graphql/queries/Ships';

async function writeDataToCSV() {
  fs.writeFile('/tmp/ships.csv', parseDataToCSV(await allShips), (err) => {
    if (err) {
      console.error('Error while trying to write data to a CSV file.', err);
    }
  });
}

export default writeDataToCSV;
