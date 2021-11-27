import { Ship } from '../types/Ship';

export function parseDataToCSV(ships: Ship) {
  const header = ["ship,missions"];

  const rows = ships.map((ship) => {
    const missions = ship.missions.map((mission) => mission.name)

    const missionsNames = missions.join(';')

    return `${ship.name},${missionsNames}`
  });

  return header.concat(rows).join("\n");
}