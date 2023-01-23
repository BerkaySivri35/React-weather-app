export const WeatherReducer = (state, action)=>{
    switch(action.type){
        case 'Set_city':
            return{
                ...state, city:action.payload
            };
        case 'Set_Current':
            return{
                ...state, current:action.payload
            };
        case 'Set_Daily':
            return{
                ...state, daily:action.payload
            };
        default :
        return{
            ...state
        };
    }
}