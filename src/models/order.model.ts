export interface OrderModel {
    flightId: number
    flightNumber: string
    destination: string
    count: number
    pricePerItem: string
    status: 'ordered' | 'paid' | 'cancled',
    comment: null | boolean
}