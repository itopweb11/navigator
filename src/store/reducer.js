export const initialState = {
    name: '',
    gmail: '',
    url: '',
    password: '',
    select: '',
    cityName: '',
    streetName: '',
    building: '',
    zipCode: '',
    change: '',
    eMail: '',
    phone: ''
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'CLEAR':
            return initialState
        default:
            return {
                ...state,
                [action.payload.key]: action.payload.value
            }
    }
}