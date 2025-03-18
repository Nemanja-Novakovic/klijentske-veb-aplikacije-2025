// {
//     "id": 172034,
//     "type": {
//       "id": 2,
//       "name": "DEPARTURE"
//     },
//     "flightKey": "202503101705IDJU  2421JU  242",
//     "flightNumber": "JU  242",
//     "destination": "Paris CDG",
//     "scheduledAt": "2025-03-10T17:05:00",
//     "estimatedAt": null,
//     "connectedType": "1",
//     "connectedFlight": "JU  242",
//     "plane": "319",
//     "gate": null,
//     "terminal": "2"
//   },

export interface FlightModel{
    id: number
    type: {
        id: number
        name: string
    }
    flightKey: string
    flightNumber: string
    destination: string 
    scheduledAt: string
    estimatedAt: null | string
    connectedType: string
    connectedFlight: string
    plane: string 
    gate: null | string
    terminal: string
}