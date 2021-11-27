import { parseDataToCSV } from '../../helpers/parseDataToCSV';

describe('Tests parseDataToCSV helper function', () => {
  it('should parse JSON data to CSV format', () => {
    const data = [
      {
        name: "Ship",
        missions: [
          {
            name: "Mission"
          }
        ]
      }
    ]

    expect(parseDataToCSV(data)).toBe("ship,missions\nShip,Mission")
  })
})