import { Ship } from '../types/Ship';

function parseDataToCSV(ships: Ship) {
  const header = ['ship,missions'];
  const rows = ships.filter((ship) => ship.active).map((ship) => {
    const missions = ship.missions.map((mission) => mission.name);

    const missionsNames = missions.join(';');

    return `${ship.name},${missionsNames}`;
  });

  return header.concat(rows).join('\n');
}

export default parseDataToCSV;
