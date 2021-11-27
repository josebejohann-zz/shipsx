import fs from 'fs'

import { parseDataToCSV } from "./parseDataToCSV";
import { ships } from '../graphql/queries/Ships'

export async function writeDataToCSV() {
  fs.writeFile('/tmp/ships.csv', parseDataToCSV(await ships), err => {
    if (err) {
      console.error('Error while trying to write data to a CSV file.', err);
    }
  });
}
