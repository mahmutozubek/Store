export default function reducers(state,action){
    switch (action.type) {
      case 'Is_Auth':
        const {isAuth} =action.payloads
       console.log(isAuth+"REDUCERS")
        return {...state,isAuthTrue:isAuth}
        
    
      default:
        return state
    }
}