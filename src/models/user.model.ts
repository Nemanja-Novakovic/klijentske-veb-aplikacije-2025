export interface Usermodel{
    email: string
    password: string
    orders: {
        flightId: number
        flightNumber: string
        destination: string
        count: number
        price: string
        status: 'ordered' | 'paid' | 'cancled',
        comment: null | boolean
    }[]
}